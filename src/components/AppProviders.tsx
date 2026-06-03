"use client";

import { ThemeProvider } from "../context/ThemeContext";
import { LocaleProvider } from "../context/LocaleContext";
import { PortfolioGate } from "./portfolioGame/PortfolioGate";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <PortfolioGate>{children}</PortfolioGate>
      </LocaleProvider>
    </ThemeProvider>
  );
}
