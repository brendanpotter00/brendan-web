// Changelog entries. Append anywhere; the page sorts newest-first.
// Schema:
//   date  "YYYY-MM-DD" (required)
//   text  one or two sentences, no em dashes (required)
//   title short bold lead-in (optional)
//   tags  array of ids from tags.js (required, at least one)
//   link  { href, label } (optional)
export const ENTRIES = [
  {
    date: "2026-06-14",
    title: "Language detection",
    text: "Built a language-detection library for the Cisco IQ agent router. Lingua handles the common case locally and falls back to a Mistral model only when confidence drops, then routes mixed-language messages by intent rather than majority language.",
    tags: ["career"],
  },
  {
    date: "2026-06-13",
    title: "Location normalization",
    text: "Built location normalization for onesecondswe.dev. A two-tier cascade maps messy job-posting strings to canonical places: a Postgres alias cache absorbs repeats, and Claude Haiku parses only cache misses, splitting multi-location posts into separate tags.",
    tags: ["side-projects"],
    link: { href: "https://onesecondswe.dev", label: "live" },
  },
  {
    date: "2026-06-11",
    title: "Site rebuild",
    text: "Rebuilt this site from a 3D-heavy scroller into the paper-light four-tab version you are reading. Paper, ink, and far fewer megabytes.",
    tags: ["side-projects"],
  },
  {
    date: "2026-05-26",
    title: "Semantic router",
    text: "Joined the semantic router team behind Cisco IQ. Routing, evals, and orchestration for 10+ agents.",
    tags: ["career"],
  },
  {
    date: "2026-03-02",
    title: "Cisco",
    text: "Started at Cisco as a full-stack engineer.",
    tags: ["career"],
  },
  {
    date: "2025-11-15",
    title: "onesecondswe.dev",
    text: "Started building a candidate-first job portal. AI classification and alerts; your own personal recruiter.",
    tags: ["side-projects"],
    link: { href: "https://onesecondswe.dev", label: "live" },
  },
];
