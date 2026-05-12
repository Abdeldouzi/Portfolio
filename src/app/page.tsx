"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
import { useLocale } from "../context/LocaleContext";
import { RichText } from "../components/RichText";
import styles from "./page.module.css";

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

function RotatingTypewriter({
  lines,
  typingSpeed = 80,
  holdMs = 5000,
}: {
  lines: readonly string[];
  typingSpeed?: number;
  holdMs?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const lineIndexRef = useRef(0);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      while (!cancelled) {
        const text = lines[lineIndexRef.current % lines.length];

        for (let i = 0; i <= text.length; i++) {
          if (cancelled) return;
          setDisplayText(text.slice(0, i));
          if (i < text.length) {
            await sleep(typingSpeed);
          }
        }

        if (cancelled) return;
        await sleep(holdMs);

        for (let i = text.length; i >= 0; i--) {
          if (cancelled) return;
          setDisplayText(text.slice(0, i));
          if (i > 0) {
            await sleep(typingSpeed);
          }
        }

        lineIndexRef.current += 1;
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [lines, typingSpeed, holdMs]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={styles.accent}>
      {displayText}
      {showCursor && <span className={styles.cursor}>|</span>}
    </span>
  );
}

export default function Home() {
  const { t, locale } = useLocale();

  const heroLines = useMemo(
    () => [t("home.hero1"), t("home.hero2")] as const,
    [t, locale],
  );

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Abdel-Karim Douzi |{" "}
        <RotatingTypewriter lines={heroLines} typingSpeed={80} holdMs={5000} />
      </h1>

      <div className={styles.actions}>
        <Link href="/projets" className={styles.primary}>
          {t("home.ctaProjects")}
        </Link>
        <Link href="/contact" className={styles.secondary}>
          {t("home.ctaContact")}
        </Link>
      </div>

      <section className={styles.intro} aria-labelledby="intro-heading">
        <h2 id="intro-heading" className={styles.introHeading}>
          {t("home.introTitle")}
        </h2>
        <p className={styles.introText}>
          <RichText text={t("home.intro1")} />
        </p>
        <p className={styles.introText}>
          <RichText text={t("home.intro2")} />
        </p>
      </section>
    </div>
  );
}
