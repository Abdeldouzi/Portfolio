export type GameCategory = "backend" | "database" | "frontend";

export type GameWord = {
  id: string;
  category: GameCategory;
  labelFr: string;
  labelEn: string;
};

export const SORT_PER_CATEGORY = 3;

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
];

export const VASE_ORDER: GameCategory[] = ["backend", "frontend", "database"];

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
  return {
    left: `${8 + (hash % 72)}%`,
    top: `${6 + ((hash * 7) % 58)}%`,
    ["--float-dur" as string]: `${16 + (hash % 10)}s`,
    ["--float-delay" as string]: `${-(hash % 12)}s`,
    ["--float-x" as string]: `${10 + (hash % 18)}px`,
    ["--float-y" as string]: `${14 + (hash % 22)}px`,
  };
}
