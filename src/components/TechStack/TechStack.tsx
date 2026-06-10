"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "../../context/LocaleContext";
import styles from "./TechStack.module.css";

export type Tech = {
  name: string;
  img: string;
  category: "frontend" | "backend" | "database" | "tools" | "cms" | "design";
  descriptionKey?: string;
};

interface TechStackProps {
  techs: Tech[];
}

type Filter = "all" | Tech["category"];

const CATEGORY_LABEL_KEYS: Record<Tech["category"], string> = {
  frontend: "skills.catFrontend",
  backend: "skills.catBackend",
  database: "skills.catDatabase",
  tools: "skills.catTools",
  design: "skills.catDesign",
  cms: "skills.catCms",
};

export function TechStack({ techs }: TechStackProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const { t } = useLocale();

  const categories: { id: Filter; labelKey: string }[] = [
    { id: "all", labelKey: "skills.catAll" },
    { id: "frontend", labelKey: "skills.catFrontend" },
    { id: "backend", labelKey: "skills.catBackend" },
    { id: "database", labelKey: "skills.catDatabase" },
    { id: "tools", labelKey: "skills.catTools" },
    { id: "design", labelKey: "skills.catDesign" },
    { id: "cms", labelKey: "skills.catCms" },
  ];

  const filtered = filter === "all" ? techs : techs.filter((tech) => tech.category === filter);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`${styles.filterBtn} ${filter === cat.id ? styles.filterBtnActive : ""}`}
            onClick={() => setFilter(cat.id)}
          >
            {t(cat.labelKey)}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((tech, index) => (
          <div
            key={tech.name}
            className={styles.card}
            style={{
              animationDelay: `${index * 0.05}s`,
            }}
          >
            <div className={styles.icon}>
              <Image src={tech.img} alt={tech.name} width={48} height={48} />
            </div>
            <h3 className={styles.name}>{tech.name}</h3>
            {tech.descriptionKey ? (
              <p className={styles.desc}>{t(`skills.${tech.descriptionKey}`)}</p>
            ) : null}
            <span className={styles.badge}>{t(CATEGORY_LABEL_KEYS[tech.category])}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
