"use client";

import { ThemeProvider } from "../context/ThemeContext";
import { LocaleProvider } from "../context/LocaleContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
