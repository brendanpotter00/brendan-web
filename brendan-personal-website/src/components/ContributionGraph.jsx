import GitHubCalendar from "react-github-calendar";
import ErrorBoundary from "./ErrorBoundary";
import { SITE } from "../data/site";

const fallback = (
  <a href={`https://github.com/${SITE.githubUser}`}>
    view contributions on GitHub
  </a>
);

export default function ContributionGraph() {
  return (
    <div>
      <div className="contrib-box">
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
