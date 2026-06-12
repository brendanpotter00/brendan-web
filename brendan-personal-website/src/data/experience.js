// One line per job, rendered on the home page.
// years: short display string; text: keep to one sentence, no em dashes.
// A company with multiple roles uses `roles`: the company renders as a
// header line with each role's years + text beneath it.
export const EXPERIENCE = [
  {
    years: "2026–",
    company: "Cisco",
    text: "Full-stack engineer. Semantic router + evals for Cisco IQ's 10+ agents.",
  },
  {
    company: "ForeFlight (a Boeing company)",
    roles: [
      {
        years: "2023–26",
        text: "Full-stack SWE. Custom airport authoring; cloud drive on 30K+ devices.",
      },
      {
        years: "2022–23",
        text: "SWE co-op/intern. Cross-platform PDF sync.",
      },
    ],
  },
  {
    years: "2023",
    company: "Trinity University",
    text: "ACM computer science tutor.",
  },
];
