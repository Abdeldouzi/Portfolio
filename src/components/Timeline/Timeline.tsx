"use client";

import { useEffect, useRef, useState } from "react";
import { RichText } from "../RichText";
import styles from "./Timeline.module.css";

export type EducationLevel = "bac" | "bts" | "bac3" | "master";
export type ExperienceLevel = "fullstack" | "web" | "ecommerce";

export type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  type: "education" | "experience";
  level?: EducationLevel;
  experienceLevel?: ExperienceLevel;
  badge?: string;
  logo?: string;
  logoAlt?: string;
  tags?: string[];
};

interface TimelineProps {
  items: TimelineItem[];
  animated?: boolean;
}

const MOBILE_QUERY = "(max-width: 768px)";

export function Timeline({ items, animated = false }: TimelineProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleIds, setVisibleIds] = useState<Set<string>>(() =>
    animated ? new Set() : new Set(items.map((item) => item.id)),
  );
  const [lineProgress, setLineProgress] = useState(animated ? 0 : 1);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!animated) return;

    const observers: IntersectionObserver[] = [];

    items.forEach((item, index) => {
      const el = itemRefs.current[item.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;
          setVisibleIds((prev) => {
            if (prev.has(item.id)) return prev;
            const next = new Set(prev);
            next.add(item.id);
            return next;
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
      );

      observer.observe(el);
      observers.push(observer);

      if (index === 0) {
        window.setTimeout(() => {
          setVisibleIds((prev) => new Set(prev).add(item.id));
        }, 80);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [animated, items]);

  useEffect(() => {
    if (!animated) return;

    const updateProgress = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportMid = window.innerHeight * 0.55;
      const total = rect.height;
      const traveled = viewportMid - rect.top;
      const progress = Math.min(1, Math.max(0, traveled / Math.max(total, 1)));
      setLineProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [animated, items.length]);

  const toggleItem = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className={`${styles.timeline} ${animated ? styles.timelineAnimated : ""}`}>
      <div className={styles.container} ref={containerRef}>
        {animated ? (
          <div className={styles.progressRail} aria-hidden>
            <div className={styles.progressFill} style={{ height: `${lineProgress * 100}%` }} />
          </div>
        ) : null}

        {items.map((item, index) => {
          const isVisible = visibleIds.has(item.id);
          const levelClass = item.level
            ? styles[`level_${item.level}`]
            : item.experienceLevel
              ? styles[`exp_${item.experienceLevel}`]
              : "";
          const isOpen = !isMobile || selectedId === item.id;
          const hasDescription = Boolean(item.description);

          return (
            <div
              key={item.id}
              ref={(el) => {
                itemRefs.current[item.id] = el;
              }}
              className={`${styles.itemWrapper} ${animated ? styles.itemReveal : ""} ${
                isVisible ? styles.itemVisible : ""
              }`}
              style={animated ? { transitionDelay: `${index * 0.1}s` } : undefined}
            >
              <div className={styles.marker}>
                <button
                  type="button"
                  className={`${styles.dot} ${levelClass} ${
                    isMobile && selectedId === item.id ? styles.dotActive : ""
                  }`}
                  onClick={() => isMobile && hasDescription && toggleItem(item.id)}
                  aria-label={item.title}
                  tabIndex={isMobile && hasDescription ? 0 : -1}
                />
                {!animated && index < items.length - 1 ? <div className={styles.line} /> : null}
              </div>

              <div className={styles.content}>
                <div
                  className={`${styles.card} ${levelClass} ${
                    isOpen ? styles.cardOpen : ""
                  } ${item.badge ? styles.cardFeatured : ""} ${
                    isMobile && hasDescription ? styles.cardExpandable : styles.cardExpanded
                  }`}
                  onClick={() => isMobile && hasDescription && toggleItem(item.id)}
                  onKeyDown={(e) => {
                    if (!isMobile || !hasDescription) return;
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleItem(item.id);
                    }
                  }}
                  role={isMobile && hasDescription ? "button" : undefined}
                  tabIndex={isMobile && hasDescription ? 0 : undefined}
                >
                  <div className={styles.header}>
                    <div className={styles.titleRow}>
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.logoAlt ?? item.subtitle}
                          className={styles.schoolLogo}
                        />
                      ) : null}
                      <div className={styles.titleBlock}>
                        <h3 className={styles.title}>{item.title}</h3>
                        {item.badge ? (
                          <span className={styles.badge}>{item.badge}</span>
                        ) : null}
                      </div>
                    </div>
                    <span className={styles.date}>{item.date}</span>
                  </div>

                  <p className={styles.subtitle}>{item.subtitle}</p>

                  {item.tags && item.tags.length > 0 ? (
                    <div className={styles.tags}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {isOpen && hasDescription ? (
                    <div className={styles.descriptionWrapper}>
                      {item.description!.split("\n").map((line, idx) => (
                        <p key={idx} className={styles.description}>
                          • <RichText text={line.replace(/^•\s*/, "")} />
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {isMobile && hasDescription ? (
                    <button
                      type="button"
                      className={styles.expandBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleItem(item.id);
                      }}
                      aria-expanded={selectedId === item.id}
                    >
                      {selectedId === item.id ? "−" : "+"}
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
