import { useEffect, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import ErrorBoundary from "./ErrorBoundary";
import { SITE } from "../data/site";

const fallback = (
  <a href={`https://github.com/${SITE.githubUser}`}>
    view contributions on GitHub
  </a>
);

export default function ContributionGraph() {
  const boxRef = useRef(null);

  // The calendar renders oldest-to-newest, so when it overflows it opens
  // scrolled to the earliest months. Once the (async) data lands, jump the
  // scroll to the right edge so "now" is what shows first.
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    let userScrolled = false;
    const markUserScroll = () => {
      userScrolled = true;
    };
    box.addEventListener("wheel", markUserScroll, { passive: true });
    box.addEventListener("touchstart", markUserScroll, { passive: true });
    box.addEventListener("pointerdown", markUserScroll, { passive: true });

    const scrollToNow = () => {
      if (!userScrolled && box.scrollWidth > box.clientWidth) {
        box.scrollLeft = box.scrollWidth;
      }
    };

    scrollToNow();
    const observer = new MutationObserver(scrollToNow);
    observer.observe(box, { childList: true, subtree: true });
    const stop = setTimeout(() => observer.disconnect(), 4000);

    return () => {
      clearTimeout(stop);
      observer.disconnect();
      box.removeEventListener("wheel", markUserScroll);
      box.removeEventListener("touchstart", markUserScroll);
      box.removeEventListener("pointerdown", markUserScroll);
    };
  }, []);

  return (
    <div>
      <div className="contrib-box" ref={boxRef}>
        <ErrorBoundary fallback={fallback}>
          <GitHubCalendar
            username={SITE.githubUser}
            colorScheme="light"
            fontSize={11}
            blockSize={8}
            blockMargin={3}
            errorMessage=""
          />
        </ErrorBoundary>
      </div>
      <p className="contrib-caption">
        github contributions · {SITE.githubUser}
      </p>
    </div>
  );
}
