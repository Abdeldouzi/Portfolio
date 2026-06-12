export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://portfolio-abdel-karim-douzi.vercel.app";

export const SITE_NAME = "Abdel-Karim Douzi | Portfolio full stack";

export const SITE_DESCRIPTION =
  "Portfolio d'Abdel-Karim Douzi, développeur full stack. Projets web, compétences techniques, formation, expérience et contact.";

export const SITE_KEYWORDS = [
  "Abdel-Karim Douzi",
  "Abdel Karim Douzi",
  "développeur full stack",
  "portfolio développeur web",
  "alternance développeur",
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
];

export const SITE_ROUTES = [
  "",
  "/formation",
  "/experience",
  "/competences",
  "/projets",
  "/projets/riad-al-badun",
  "/projets/gilla",
  "/contact",
] as const;
