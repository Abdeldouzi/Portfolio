"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./TechStack.module.css";

export type Tech = {
  name: string;
  img: string;
  category: "frontend" | "backend" | "database" | "tools" | "cms";
};

interface TechStackProps {
  techs: Tech[];
}

type Filter = "all" | Tech["category"];

export function TechStack({ techs }: TechStackProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const categories: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" },
    { id: "cms", label: "CMS" },
  ];

  const filtered = filter === "all" ? techs : techs.filter((t) => t.category === filter);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.filterBtn} ${filter === cat.id ? styles.filterBtnActive : ""}`}
            onClick={() => setFilter(cat.id)}
          >
            {cat.label}
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
            <span className={styles.badge}>{tech.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
