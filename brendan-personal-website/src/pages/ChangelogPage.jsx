import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { ENTRIES } from "../data/changelog";
import { TAGS, TAG_IDS } from "../data/tags";

const BATCH = 20;
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(iso) {
  const [, month, day] = iso.split("-");
  return `${MONTHS[Number(month) - 1]} ${Number(day)}`;
}

export default function ChangelogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const tag = searchParams.get("tag") ?? "all";
  const [limit, setLimit] = useState(BATCH);
  const sentinelRef = useRef(null);

  const sorted = useMemo(
    () => [...ENTRIES].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [],
  );

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    for (const entry of ENTRIES) {
      for (const t of entry.tags) {
        if (!TAG_IDS.has(t)) {
          console.warn(
            `changelog: unknown tag "${t}" on entry ${entry.date} (add it to src/data/tags.js)`,
          );
        }
      }
    }
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return sorted.filter((entry) => {
      if (tag !== "all" && !entry.tags.includes(tag)) return false;
      if (!needle) return true;
      return [entry.title ?? "", entry.text, entry.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [sorted, query, tag]);

  // search/filter changes reset the scroll-to-load window
  useEffect(() => {
    setLimit(BATCH);
  }, [query, tag]);

  const visible = filtered.slice(0, limit);
  const exhausted = limit >= filtered.length;

  // scroll-to-load: render the next batch as the sentinel nears the viewport
  useEffect(() => {
    if (exhausted) return undefined;
    const el = sentinelRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLimit((l) => l + BATCH);
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [exhausted, filtered.length]);

  const setParam = (key, value, defaultValue) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === defaultValue) next.delete(key);
    else next.set(key, value);
    setSearchParams(next, { replace: key === "q" });
  };

  let lastYear = "";

  return (
    <main>
      <Reveal index={0}>
        <h1 className="page-title">Changelog</h1>
        <p className="page-subtitle">
          Release notes for me: career, side projects, life.
        </p>
        <input
          className="log-search"
          type="search"
          placeholder="search entries…"
          aria-label="Search changelog entries"
          value={query}
          onChange={(event) => setParam("q", event.target.value, "")}
        />
        <div className="tag-row" role="group" aria-label="Filter by tag">
          {[{ id: "all", label: "all" }, ...TAGS].map((t) => (
            <button
              key={t.id}
              type="button"
              className={`tag-chip${tag === t.id ? " is-active" : ""}`}
              onClick={() => setParam("tag", t.id, "all")}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Reveal>

      {visible.length === 0 ? (
        <p className="log-empty">
          No entries match. Clear the search or pick another tag.
        </p>
      ) : (
        <ul className="log-list">
          {visible.map((entry, i) => {
            const year = entry.date.slice(0, 4);
            const showYear = year !== lastYear;
            lastYear = year;
            return (
              <li key={`${entry.date}-${i}`}>
                {showYear && <div className="log-year">{year}</div>}
                <Reveal className="log-entry" index={Math.min(i % BATCH, 8)}>
                  <span className="log-date">{formatDate(entry.date)}</span>
                  <span className="log-text">
                    {entry.title && (
                      <span className="log-title">{entry.title}. </span>
                    )}
                    {entry.text}
                    {entry.link && (
                      <a className="log-link" href={entry.link.href}>
                        [{entry.link.label}]
                      </a>
                    )}
                    <span className="log-pills">
                      {entry.tags.map((t) => (
                        <span className="log-pill" key={t}>
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>
                </Reveal>
              </li>
            );
          })}
        </ul>
      )}

      {!exhausted && <div ref={sentinelRef} className="log-sentinel" />}
    </main>
  );
}
