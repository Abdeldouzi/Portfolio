"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const Typewriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  useEffect(() => {
    if (displayText === text) return;
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, [displayText, text]);

  return (
    <span className={styles.accent}>
      {displayText}
      {showCursor && <span className={styles.cursor}>|</span>}
    </span>
  );
};

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Abdel-Karim Douzi | <Typewriter text="Développeur Full Stack" speed={80} />
      </h1>

      <div className={styles.actions}>
        <Link href="/projets" className={styles.primary}>
          Voir mes projets
        </Link>
        <Link href="/contact" className={styles.secondary}>
          Me contacter
        </Link>
      </div>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>À propos</h2>
          <p>Mon profil, ma recherche d’alternance et mes aspirations en développement.</p>
          <Link href="/a-propos">En savoir plus</Link>
        </article>

        <article className={styles.card}>
          <h2>Formation</h2>
          <p>Mon parcours scolaire de Bac à Master.</p>
          <Link href="/formation">Voir ma formation</Link>
        </article>

        <article className={styles.card}>
          <h2>Expérience</h2>
          <p>Stages et missions techniques réalisées en entreprise.</p>
          <Link href="/experience">Voir mon expérience</Link>
        </article>

        <article className={styles.card}>
          <h2>Compétences</h2>
          <p>Langages, frameworks, outils, bases de données et langues.</p>
          <Link href="/competences">Voir mes compétences</Link>
        </article>

        <article className={styles.card}>
          <h2>Projets</h2>
          <p>
            Une sélection de réalisations qui illustrent mon parcours et mes
            compétences en développement.
          </p>
          <Link href="/projets">Voir mes projets</Link>
        </article>

        <article className={styles.card}>
          <h2>Contact</h2>
          <p>
            Email, LinkedIn et GitHub pour échanger sur une mission ou une
            collaboration.
          </p>
          <Link href="/contact">Voir mes contacts</Link>
        </article>
      </section>
    </div>
  );
}
