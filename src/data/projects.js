const media = (name) => `/media/${name}`;

export const photographyProjects = [
  {
    title: "Tearfund — East Africa drought response",
    client: "Tearfund",
    year: "2023",
    summary:
      "A documentary series capturing community resilience and environmental impact across Turkana during a persistent drought.",
    images: [
      media("turkana-1.webp"),
      media("turkana-2.webp"),
      media("turkana-3.webp"),
      media("turkana-4.webp"),
    ],
    link: "https://pjslense.pixieset.com/tearfund/",
  },
  {
    title: "Plastic pollution advocacy campaign",
    client: "Tearfund",
    year: "2023",
    summary:
      "Campaign photography from Nairobi's Dandora dumpsite, created to connect community experience with the global plastics-treaty conversation.",
    images: [
      media("plastics-1.webp"),
      media("plastics-2.webp"),
      media("plastics-3.webp"),
      media("plastics-4.webp"),
    ],
    link: "https://pjslense.pixieset.com/tearfund-plasticspollutioncampaign/",
  },
  {
    title: "AMCHAM Kenya Annual Business Forum",
    client: "AMCHAM Kenya",
    year: "2019",
    summary:
      "Event photography documenting speakers, delegates and the connections formed during AMCHAM Kenya's annual business forum.",
    images: [
      media("amcham-2.webp"),
      media("amcham-1.webp"),
      media("amcham-3.webp"),
      media("amcham-4.webp"),
    ],
    link: "https://pjslense.pixieset.com/events/",
  },
];

export const designProjects = [
  {
    slug: "cct-impact-study-series",
    discipline: "Graphic Design",
    title: "Local church, lasting transformation",
    client: "Tearfund",
    year: "2023",
    summary:
      "An editorial research summary translating Church and Community Transformation findings into an accessible, human-centred publication.",
    cover: media("cct-impact-study.webp"),
    images: [media("cct-impact-study.webp")],
    services: ["Editorial design", "Information hierarchy", "Publication layout"],
    overview:
      "The publication pairs research findings with documentary imagery and a clear visual hierarchy so readers can move from programme context to evidence and outcomes without losing the human story.",
    contribution:
      "The design system uses Tearfund's established yellow and navy palette, large evidence-led statistics and generous editorial pacing to make a dense research summary easier to scan and understand.",
  },
  {
    slug: "social-accountability-tools-guide",
    discipline: "Graphic Design",
    title: "Social accountability tools guide",
    client: "Tearfund",
    year: "2023",
    summary:
      "A practical publication showing communities how to integrate advocacy and accountability tools into the CCT process.",
    cover: media("social-accountability-guide.webp"),
    images: [media("social-accountability-guide.webp")],
    services: ["Cover design", "Publication design", "Visual storytelling"],
    overview:
      "The guide needed to feel practical and approachable while remaining recognisably connected to Tearfund's wider programme communications.",
    contribution:
      "A bold cover, documentary-led imagery and a high-contrast typographic system establish an accessible entry point for a technical advocacy resource.",
  },
];

export const storyProjects = [
  {
    slug: "voices-from-turkana",
    discipline: "Visual Storytelling",
    tag: "Documentary",
    title: "Voices from Turkana",
    client: "Tearfund",
    year: "2023",
    summary:
      "A visual narrative centred on communities living on the frontlines of prolonged drought and climate pressure in northern Kenya.",
    cover: media("turkana-1.webp"),
    images: [
      media("turkana-1.webp"),
      media("turkana-2.webp"),
      media("turkana-3.webp"),
      media("turkana-4.webp"),
    ],
    services: ["Documentary photography", "Interview support", "Story framing"],
    overview:
      "The work focuses on daily life, resilience and the environmental conditions surrounding communities in Turkana, keeping people and their dignity at the centre of the narrative.",
    contribution:
      "The photographic sequence moves between portraiture, landscape and lived detail to give programme communications a grounded, human perspective.",
    externalLink: "https://pjslense.pixieset.com/tearfund/",
    externalLabel: "View the full gallery",
  },
  {
    slug: "the-plastic-tide",
    discipline: "Visual Storytelling",
    tag: "Advocacy",
    title: "The Plastic Tide",
    client: "Tearfund",
    year: "2023",
    summary:
      "An advocacy story connecting the scale of plastic waste at Dandora with the people and systems behind the global plastics debate.",
    cover: media("plastics-1.webp"),
    images: [
      media("plastics-1.webp"),
      media("plastics-2.webp"),
      media("plastics-3.webp"),
      media("plastics-4.webp"),
    ],
    services: ["Campaign photography", "Advocacy storytelling", "Visual research"],
    overview:
      "Created alongside the INC-3 plastics-treaty negotiations in Nairobi, the series grounds an international policy conversation in the visible reality of one of Africa's largest dumpsites.",
    contribution:
      "Wide environmental frames and close human moments work together to communicate scale without reducing the story to statistics alone.",
    externalLink:
      "https://pjslense.pixieset.com/tearfund-plasticspollutioncampaign/",
    externalLabel: "View the full gallery",
  },
];

export const videoProjects = [
  {
    title: "Church and Community Transformation documentary",
    client: "Tearfund",
    year: "2025",
    summary:
      "Two short documentaries from Alale, West Pokot, exploring the local impact of Church and Community Mobilisation practices. The work was produced with Tearfund and Farming Systems Kenya for donor reporting.",
    cover: media("cct-documentary.webp"),
    link: "https://youtu.be/03ux3CzOrPA",
  },
  {
    title: "Africa Evangelical Alliance conference",
    client: "ACT Forum",
    year: "2025",
    summary:
      "Conference coverage combining event footage and focused interviews to document the initiatives, progress and perspectives shared by church leaders from across Africa.",
    cover: media("abundant-africa.webp"),
    link: "https://youtu.be/u821fu5OyaI",
  },
];

export const projectDetails = [...designProjects, ...storyProjects].reduce(
  (projects, project) => {
    projects[project.slug] = project;
    return projects;
  },
  {},
);
