import { NavLink } from "react-router-dom";

const LINKS = [
  ["home", "/"],
  ["projects", "/projects"],
  ["photos", "/photos"],
  ["changelog", "/changelog"],
];

export default function Nav() {
  return (
    <nav className="site-nav" aria-label="Site">
      {LINKS.map(([label, to]) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) => (isActive ? "is-active" : undefined)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
