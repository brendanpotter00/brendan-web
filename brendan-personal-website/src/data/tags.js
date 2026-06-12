// Single source of truth for changelog tags.
// Add a tag here first, then use its id in changelog.js entries.
export const TAGS = [
  { id: "career", label: "career" },
  { id: "side-projects", label: "side-projects" },
  { id: "leisure", label: "leisure" },
];

export const TAG_IDS = new Set(TAGS.map((t) => t.id));
