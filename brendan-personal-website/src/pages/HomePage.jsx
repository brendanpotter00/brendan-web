import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import PlaneSlot from "../components/PlaneSlot";
import ContributionGraph from "../components/ContributionGraph";
import { SITE } from "../data/site";
import { EXPERIENCE } from "../data/experience";

export default function HomePage() {
  return (
    <main>
      <Reveal as="header" className="home-header" index={0}>
        <div>
          <h1>{SITE.name}</h1>
          <p className="tagline">{SITE.tagline}</p>
          <p className="social-row">
            <a href={SITE.github}>github</a> ·{" "}
            <a href={SITE.linkedin}>linkedin</a> ·{" "}
            <a href={`mailto:${SITE.email}`}>email</a>
          </p>
        </div>
        <PlaneSlot />
      </Reveal>

      <hr />

      <Reveal as="section" index={1}>
        <h2>About</h2>
        <p>
          Hey, I'm Brendan. I'm an AI backend engineer at Cisco, building the
          semantic router behind <a href={SITE.ciscoIqArticle}>Cisco IQ</a> and
          the evals that keep its 10+ agents routing well. Before that, three
          years at <a href="https://foreflight.com">ForeFlight</a> (a Boeing
          company) building tools for pilots, from custom runway authoring for
          the backcountry to a cloud drive on 30,000+ flight decks.
        </p>
        <p>
          I'm also building <a href={SITE.onesecondswe}>onesecondswe.dev</a>, a
          candidate-first job portal with AI classification and alerts. Think
          DataDog for job alerts, or your own AI recruiter. Off the clock:
          licensed pilot (150+ hours), certified scuba diver, travel
          photographer. I keep a <Link to="/changelog">changelog</Link> of it
          all.
        </p>
      </Reveal>

      <Reveal index={2}>
        <ContributionGraph />
      </Reveal>

      <hr />

      <Reveal as="section" index={3}>
        <h2>Experience</h2>
        <ul className="exp-list">
          {EXPERIENCE.flatMap((job) =>
            job.roles
              ? [
                  <li key={job.company}>
                    <span className="exp-years" aria-hidden="true" />
                    <span>
                      <b>{job.company}</b>
                    </span>
                  </li>,
                  ...job.roles.map((role) => (
                    <li key={`${job.company}-${role.years}`}>
                      <span className="exp-years">{role.years}</span>
                      <span>{role.text}</span>
                    </li>
                  )),
                ]
              : [
                  <li key={`${job.company}-${job.years}`}>
                    <span className="exp-years">{job.years}</span>
                    <span>
                      <b>{job.company}</b> · {job.text}
                    </span>
                  </li>,
                ],
          )}
        </ul>
      </Reveal>

      <hr />

      <Reveal as="section" index={4}>
        <h2>Contact</h2>
        <p className="contact-line">
          <b>Email:</b> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p className="contact-line">
          <b>LinkedIn:</b> <a href={SITE.linkedin}>brendan-potter00</a>
        </p>
        <p className="contact-line">
          <b>Location:</b> {SITE.location}
        </p>
      </Reveal>
    </main>
  );
}
