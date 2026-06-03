"use client";

import { useState } from "react";
import styles from "./Timeline.module.css";

export type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  type: "education" | "experience";
};

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={item.id} className={styles.itemWrapper}>
            <div className={styles.marker}>
              <button
                className={`${styles.dot} ${selectedId === item.id ? styles.dotActive : ""}`}
                onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                aria-label={item.title}
              />
              {index < items.length - 1 && <div className={styles.line} />}
            </div>

            <div className={styles.content}>
              <div
                className={`${styles.card} ${selectedId === item.id ? styles.cardOpen : ""}`}
              >
                <div className={styles.header}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <span className={styles.date}>{item.date}</span>
                </div>

                <p className={styles.subtitle}>{item.subtitle}</p>

                {selectedId === item.id && item.description && (
                  <p className={styles.description}>{item.description}</p>
                )}

                <button
                  className={styles.expandBtn}
                  onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                  aria-expanded={selectedId === item.id}
                  style={{ visibility: item.description ? "visible" : "hidden" }}
                >
                  {selectedId === item.id ? "−" : "+"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
