export type GameCategory = "backend" | "database" | "frontend";

export type GameWord = {
  id: string;
  category: GameCategory;
  labelFr: string;
  labelEn: string;
};

/** 5 compétences par vase = 15 bulles au total */
export const SORT_PER_CATEGORY = 5;

export const GAME_WORD_POOL: GameWord[] = [
  { id: "spring", category: "backend", labelFr: "Spring Boot", labelEn: "Spring Boot" },
  { id: "api", category: "backend", labelFr: "API REST", labelEn: "REST API" },
  { id: "java", category: "backend", labelFr: "Java", labelEn: "Java" },
  { id: "node", category: "backend", labelFr: "Node.js", labelEn: "Node.js" },
  { id: "controller", category: "backend", labelFr: "Contrôleur", labelEn: "Controller" },
  { id: "jpa", category: "backend", labelFr: "JPA", labelEn: "JPA" },
  { id: "express", category: "backend", labelFr: "Express", labelEn: "Express" },
  { id: "middleware", category: "backend", labelFr: "Middleware", labelEn: "Middleware" },
  { id: "php", category: "backend", labelFr: "PHP", labelEn: "PHP" },
  { id: "server", category: "backend", labelFr: "Serveur", labelEn: "Server" },
  { id: "springsec", category: "backend", labelFr: "Spring Security", labelEn: "Spring Security" },
  { id: "graphql", category: "backend", labelFr: "GraphQL", labelEn: "GraphQL" },
  { id: "jwt", category: "backend", labelFr: "JWT", labelEn: "JWT" },
  { id: "react", category: "frontend", labelFr: "React", labelEn: "React" },
  { id: "next", category: "frontend", labelFr: "Next.js", labelEn: "Next.js" },
  { id: "ts", category: "frontend", labelFr: "TypeScript", labelEn: "TypeScript" },
  { id: "css", category: "frontend", labelFr: "CSS", labelEn: "CSS" },
  { id: "ui", category: "frontend", labelFr: "Interface", labelEn: "UI" },
  { id: "jsx", category: "frontend", labelFr: "JSX", labelEn: "JSX" },
  { id: "html", category: "frontend", labelFr: "HTML", labelEn: "HTML" },
  { id: "component", category: "frontend", labelFr: "Composant", labelEn: "Component" },
  { id: "responsive", category: "frontend", labelFr: "Responsive", labelEn: "Responsive" },
  { id: "tailwind", category: "frontend", labelFr: "Tailwind", labelEn: "Tailwind" },
  { id: "bootstrap", category: "frontend", labelFr: "Bootstrap", labelEn: "Bootstrap" },
  { id: "sass", category: "frontend", labelFr: "Sass", labelEn: "Sass" },
  { id: "figma", category: "frontend", labelFr: "Figma", labelEn: "Figma" },
  { id: "mysql", category: "database", labelFr: "MySQL", labelEn: "MySQL" },
  { id: "mongo", category: "database", labelFr: "MongoDB", labelEn: "MongoDB" },
  { id: "sql", category: "database", labelFr: "SQL", labelEn: "SQL" },
  { id: "postgres", category: "database", labelFr: "PostgreSQL", labelEn: "PostgreSQL" },
  { id: "merise", category: "database", labelFr: "Merise", labelEn: "Merise" },
  { id: "hibernate", category: "database", labelFr: "Hibernate", labelEn: "Hibernate" },
  { id: "redis", category: "database", labelFr: "Redis", labelEn: "Redis" },
  { id: "table", category: "database", labelFr: "Table", labelEn: "Table" },
  { id: "orm", category: "database", labelFr: "ORM", labelEn: "ORM" },
  { id: "sqlite", category: "database", labelFr: "SQLite", labelEn: "SQLite" },
  { id: "index", category: "database", labelFr: "Index", labelEn: "Index" },
  { id: "phpmyadmin", category: "database", labelFr: "PhpMyAdmin", labelEn: "PhpMyAdmin" },
  { id: "mcd", category: "database", labelFr: "MCD", labelEn: "CDM" },
];

export const VASE_ORDER: GameCategory[] = ["backend", "frontend", "database"];

export const VASE_ICONS: Record<GameCategory, string> = {
  backend: "⚙",
  frontend: "✦",
  database: "⬡",
};

function pickMany<T>(items: T[], count: number): T[] {
  const pool = [...items];
  const picked: T[] = [];
  while (picked.length < count && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]!);
  }
  return picked;
}

export function createSortingRound(): GameWord[] {
  const backend = pickMany(
    GAME_WORD_POOL.filter((w) => w.category === "backend"),
    SORT_PER_CATEGORY,
  );
  const frontend = pickMany(
    GAME_WORD_POOL.filter((w) => w.category === "frontend"),
    SORT_PER_CATEGORY,
  );
  const database = pickMany(
    GAME_WORD_POOL.filter((w) => w.category === "database"),
    SORT_PER_CATEGORY,
  );
  const words = [...backend, ...frontend, ...database];
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j]!, words[i]!];
  }
  return words;
}

export function bubbleFloatStyle(id: string): Record<string, string | number> {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) % 9973;
  }
  const slot = hash % 15;
  const col = slot % 5;
  const row = Math.floor(slot / 5);

  return {
    left: `${2 + col * 19 + (hash % 6)}%`,
    top: `${4 + row * 28 + ((hash * 3) % 8)}%`,
    ["--float-dur" as string]: `${3.2 + (hash % 3) * 0.8}s`,
    ["--float-dur2" as string]: `${2.4 + (hash % 4) * 0.6}s`,
    ["--float-x" as string]: `${22 + (hash % 28)}px`,
    ["--float-y" as string]: `${16 + (hash % 24)}px`,
    ["--float-rot" as string]: `${((hash % 7) - 3) * 1.2}deg`,
  };
}
