"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useLocale } from "../context/LocaleContext";
import { useTheme } from "../context/ThemeContext";
import type { Locale } from "../i18n/dictionaries";
import styles from "./Header.module.css";

function FlagFr() {
  return (
    <svg className={styles.langFlagSvg} viewBox="0 0 3 2" aria-hidden>
      <rect width="1" height="2" fill="#0055A4" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </svg>
  );
}

function FlagGb() {
  const id = useId();
  const clipAll = `${id}-all`;
  const clipDiag = `${id}-diag`;
  return (
    <svg className={styles.langFlagSvg} viewBox="0 0 60 30" aria-hidden>
      <defs>
        <clipPath id={clipAll}>
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <clipPath id={clipDiag}>
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipAll})`}>
        <path fill="#012169" d="M0 0v30h60V0z" />
        <path fill="none" stroke="#FFF" strokeWidth="6" d="M0 0l60 30M60 0L0 30" />
        <path
          fill="none"
          stroke="#C8102E"
          strokeWidth="4"
          clipPath={`url(#${clipDiag})`}
          d="M0 0l60 30M60 0L0 30"
        />
        <path fill="none" stroke="#FFF" strokeWidth="10" d="M30 0v30M0 15h60" />
        <path fill="none" stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
      </g>
    </svg>
  );
}

const LANGS: { code: Locale; flag: ReactNode; label: string }[] = [
  { code: "fr", flag: <FlagFr />, label: "Français" },
  { code: "en", flag: <FlagGb />, label: "English" },
];

function ThemeSunIcon() {
  return (
    <svg
      className={styles.themeSvg}
      viewBox="0 0 24 24"
      width={20}
      height={20}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 13h2a1 1 0 000-2H2a1 1 0 000 2zm18 0h2a1 1 0 000-2h-2a1 1 0 000 2zM11 2v2a1 1 0 002 0V2a1 1 0 00-2 0zm0 18v2a1 1 0 002 0v-2a1 1 0 00-2 0zM5.99 4.58a1 1 0 10-1.41 1.41l1.06 1.06a1 1 0 001.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 10-1.41 1.41l1.06 1.06a1 1 0 001.41-1.41l-1.06-1.06zM4.58 18.01a1 1 0 10-1.41-1.41l1.06-1.06a1 1 0 101.41 1.41l-1.06 1.06zM19.42 5.99a1 1 0 10-1.41-1.41l-1.06 1.06a1 1 0 101.41 1.41l1.06-1.06z"
      />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.iconBtn}
      onClick={toggleTheme}
      aria-label={isDark ? t("header.themeLight") : t("header.themeDark")}
      title={isDark ? t("header.themeLight") : t("header.themeDark")}
    >
      <ThemeSunIcon />
    </button>
  );
}

function LangMenu() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  const current = LANGS.find((l) => l.code === locale) ?? LANGS[0];

  return (
    <div className={styles.langWrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.langBtn}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("header.langChoose")}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.langFlag} aria-hidden>
          {current.flag}
        </span>
        <span className={styles.langChevron} aria-hidden>
          ▾
        </span>
      </button>
      {open ? (
        <ul className={styles.langMenu} role="listbox">
          {LANGS.map((opt) => (
            <li key={opt.code} role="option" aria-selected={locale === opt.code}>
              <button
                type="button"
                className={`${styles.langOption} ${locale === opt.code ? styles.langOptionActive : ""}`}
                onClick={() => {
                  setLocale(opt.code);
                  setOpen(false);
                }}
              >
                <span className={styles.langFlag} aria-hidden>
                  {opt.flag}
                </span>
                <span>{opt.label}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLocale();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/formation", label: t("nav.formation") },
    { href: "/experience", label: t("nav.experience") },
    { href: "/competences", label: t("nav.skills") },
    { href: "/projets", label: t("nav.projects") },
    { href: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Abdel-Karim Douzi
        </Link>

        <nav
          id="nav-principal"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label={t("header.mainNav")}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.toolsRow}>
          <div className={styles.headerTools}>
            <ThemeToggle />
            <LangMenu />
          </div>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="nav-principal"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={styles.srOnly}>
              {menuOpen ? t("header.menuClose") : t("header.menuOpen")}
            </span>
            <span className={styles.menuIcon} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
