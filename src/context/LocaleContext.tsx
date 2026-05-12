"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionaries, type Locale } from "../i18n/dictionaries";

const STORAGE_KEY = "portfolio-locale";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
} | null>(null);

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  const v = localStorage.getItem(STORAGE_KEY);
  return v === "en" || v === "fr" ? v : "fr";
}

function resolve(dict: Record<string, unknown>, path: string): string {
  const parts = path.split(".");
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur === null || typeof cur !== "object" || !(p in cur)) {
      return path;
    }
    cur = (cur as Record<string, unknown>)[p];
  }
  return typeof cur === "string" ? cur : path;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLocaleState(getStoredLocale());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "en" ? "en" : "fr";
  }, [locale, mounted]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  const t = useCallback(
    (key: string) => resolve(dictionaries[locale] as Record<string, unknown>, key),
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
