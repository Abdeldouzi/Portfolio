"use client";

import { useLocale } from "../../context/LocaleContext";
import { useTheme } from "../../context/ThemeContext";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        <span className={styles.themeIcon}>{theme === "dark" ? "☀️" : "🌙"}</span>
      </button>
      <button
        type="button"
        className={`${styles.button} ${locale === "fr" ? styles.active : ""}`}
        onClick={() => setLocale("fr")}
        aria-label="Français"
        title="Français"
      >
        <span className={styles.flag}>🇫🇷</span>
        <span className={styles.label}>FR</span>
      </button>
      <button
        type="button"
        className={`${styles.button} ${locale === "en" ? styles.active : ""}`}
        onClick={() => setLocale("en")}
        aria-label="English"
        title="English"
      >
        <span className={styles.flag}>🇬🇧</span>
        <span className={styles.label}>EN</span>
      </button>
    </div>
  );
}
