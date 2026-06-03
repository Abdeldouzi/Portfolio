export type GameCategory = "backend" | "database" | "frontend";

export type GameWord = {
  id: string;
  category: GameCategory;
  labelFr: string;
  labelEn: string;
};

export const ROUND_SIZE = 10;
export const CORRECT_PER_ROUND = 4;
export const PASS_SCORE = 3;

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

const CATEGORIES: GameCategory[] = ["backend", "database", "frontend"];

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]!;
}

function pickMany<T>(items: T[], count: number): T[] {
  const pool = [...items];
  const picked: T[] = [];
  while (picked.length < count && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]!);
  }
  return picked;
}

export function createGameRound(): { category: GameCategory; words: GameWord[] } {
  const category = pickRandom(CATEGORIES);
  const correctPool = GAME_WORD_POOL.filter((w) => w.category === category);
  const distractorPool = GAME_WORD_POOL.filter((w) => w.category !== category);

  const correctCount = Math.min(CORRECT_PER_ROUND, correctPool.length);
  const distractorCount = ROUND_SIZE - correctCount;

  const correct = pickMany(correctPool, correctCount);
  const distractors = pickMany(distractorPool, distractorCount);
  const words = [...correct, ...distractors];

  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j]!, words[i]!];
  }
  return { category, words };
}

export function countCorrectSelections(
  round: { category: GameCategory; words: GameWord[] },
  selected: Set<string>,
): number {
  return round.words.filter(
    (w) => selected.has(w.id) && w.category === round.category,
  ).length;
}
