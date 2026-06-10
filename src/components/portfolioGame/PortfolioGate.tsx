"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { RichText } from "../RichText";
import { useLocale } from "../../context/LocaleContext";
import { useTheme } from "../../context/ThemeContext";
import {
  countCorrectSelections,
  createGameRound,
  PASS_SCORE,
  type GameCategory,
  type GameWord,
} from "./words";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./PortfolioGate.module.css";

const STORAGE_KEY = "portfolio-challenge-passed";
const WIN_DELAY_MS = 1600;
const REQUIRED_SELECTIONS = 5;

type Round = { category: GameCategory; words: GameWord[] };
type Phase = "play" | "won";
type Feedback = "err" | "notEnough" | null;

export function PortfolioGate({ children }: { children: React.ReactNode }) {
  const { t, locale } = useLocale();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [passed, setPassed] = useState(false);
  const [round, setRound] = useState<Round | null>(null);
  const [phase, setPhase] = useState<Phase>("play");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [lastScore, setLastScore] = useState(0);

  useEffect(() => {
    setMounted(true);
    setPassed(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const startRound = useCallback(() => {
    setRound(createGameRound());
    setSelected(new Set());
    setFeedback(null);
    setPhase("play");
    setLastScore(0);
  }, []);

  useEffect(() => {
    if (mounted && !passed && !round) {
      startRound();
    }
  }, [mounted, passed, round, startRound]);

  const promptKey = useMemo(() => {
    if (!round) return "game.backend";
    const map: Record<GameCategory, string> = {
      backend: "game.backend",
      database: "game.database",
      frontend: "game.frontend",
    };
    return map[round.category];
  }, [round]);

  const toggleWord = (id: string) => {
    if (phase === "won") return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < REQUIRED_SELECTIONS) {
        next.add(id);
      }
      return next;
    });
    setFeedback(null);
  };

  const skipQuiz = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setPassed(true);
  };

  const validate = () => {
    if (!round || phase === "won") return;

    if (selected.size < REQUIRED_SELECTIONS) {
      setFeedback("notEnough");
      return;
    }

    const score = countCorrectSelections(round, selected);
    setLastScore(score);

    if (score >= PASS_SCORE) {
      setPhase("won");
      setFeedback(null);
      localStorage.setItem(STORAGE_KEY, "true");
      window.setTimeout(() => setPassed(true), WIN_DELAY_MS);
      return;
    }

    setFeedback("err");
    window.setTimeout(startRound, 1100);
  };

  if (!mounted) {
    return <div className={styles.hidden}>{children}</div>;
  }

  if (passed) {
    return <>{children}</>;
  }

  const selectedLabel =
    selected.size === 1 ? t("game.selected") : t("game.selectedPlural");

  const scoreLine = t("game.scoreLine")
    .replace("{n}", String(selected.size))
    .replace("{min}", String(REQUIRED_SELECTIONS));

  return (
    <>
      <div
        className={styles.overlay}
        role="dialog"
        aria-modal="true"
        aria-labelledby="game-title"
      >
        <LanguageSwitcher />
        <div className={`${styles.panel} ${phase === "won" ? styles.panelWon : ""}`}>
          {phase === "won" ? (
            <div className={styles.winScreen}>
              <p className={styles.winEmoji} aria-hidden>
                ✓
              </p>
              <h1 className={styles.winTitle}>{t("game.wellDone")}</h1>
              <p className={styles.winMessage}>
                {t("game.success").replace("{n}", String(lastScore))}
              </p>
            </div>
          ) : (
            <>
              <h1 id="game-title" className={styles.title}>
                {t("game.title")}
              </h1>
              <RichText as="p" className={styles.subtitle} text={t("game.subtitle")} />
              {round ? (
                <>
                  <RichText as="p" className={styles.prompt} text={t(promptKey)} />
                  <div className={styles.words}>
                    {round.words.map((word) => (
                      <button
                        key={word.id}
                        type="button"
                        className={`${styles.word} ${selected.has(word.id) ? styles.wordSelected : ""}`}
                        aria-pressed={selected.has(word.id)}
                        onClick={() => toggleWord(word.id)}
                      >
                        {locale === "en" ? word.labelEn : word.labelFr}
                      </button>
                    ))}
                  </div>
                  <p className={styles.meta}>
                    {selected.size}/{REQUIRED_SELECTIONS} {selectedLabel}
                  </p>
                  {feedback === "notEnough" ? (
                    <p className={`${styles.feedback} ${styles.feedbackErr}`}>
                      {t("game.needMore")}
                    </p>
                  ) : feedback === "err" ? (
                    <p className={`${styles.feedback} ${styles.feedbackErr}`}>
                      {t("game.fail")}
                    </p>
                  ) : null}
                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.validate}
                      disabled={selected.size !== REQUIRED_SELECTIONS}
                      onClick={validate}
                    >
                      {t("game.validate")}
                    </button>
                    <button
                      type="button"
                      className={styles.skipQuiz}
                      onClick={skipQuiz}
                    >
                      {t("game.skipQuiz")}
                    </button>
                  </div>
                </>
              ) : null}
            </>
          )}
        </div>
      </div>
      <div aria-hidden className={styles.hidden}>
        {children}
      </div>
    </>
  );
}
