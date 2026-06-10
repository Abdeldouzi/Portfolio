"use client";

import { FlagFr, FlagGb } from "../Flags";
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
        <FlagFr className={styles.flagSvg} />
      </button>
      <button
        type="button"
        className={`${styles.button} ${locale === "en" ? styles.active : ""}`}
        onClick={() => setLocale("en")}
        aria-label="English"
        title="English"
      >
        <FlagGb className={styles.flagSvg} />
      </button>
    </div>
  );
}
