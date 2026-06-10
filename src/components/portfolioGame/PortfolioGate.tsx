"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { RichText } from "../RichText";
import { useLocale } from "../../context/LocaleContext";
import {
  bubbleFloatStyle,
  createSortingRound,
  VASE_ICONS,
  VASE_ORDER,
  type GameCategory,
  type GameWord,
} from "./words";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./PortfolioGate.module.css";

const STORAGE_KEY = "portfolio-challenge-passed";
const WIN_DELAY_MS = 1600;

type Phase = "play" | "won";
type DragState = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

const VASE_LABEL_KEYS: Record<GameCategory, string> = {
  backend: "game.vaseBackend",
  frontend: "game.vaseFrontend",
  database: "game.vaseDatabase",
};

function hitVase(
  x: number,
  y: number,
  refs: Record<GameCategory, HTMLDivElement | null>,
): GameCategory | null {
  for (const cat of VASE_ORDER) {
    const el = refs[cat];
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
      return cat;
    }
  }
  return null;
}

export function PortfolioGate({ children }: { children: React.ReactNode }) {
  const { t, locale } = useLocale();
  const [mounted, setMounted] = useState(false);
  const [passed, setPassed] = useState(false);
  const [words, setWords] = useState<GameWord[]>([]);
  const [phase, setPhase] = useState<Phase>("play");
  const [sorted, setSorted] = useState<Record<string, GameCategory>>({});
  const [drag, setDrag] = useState<DragState | null>(null);
  const [hoverVase, setHoverVase] = useState<GameCategory | null>(null);
  const [feedback, setFeedback] = useState<"wrong" | null>(null);

  const vaseRefs = useRef<Record<GameCategory, HTMLDivElement | null>>({
    backend: null,
    frontend: null,
    database: null,
  });

  const total = words.length;
  const sortedCount = Object.keys(sorted).length;

  useEffect(() => {
    setMounted(true);
    setPassed(localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const startRound = useCallback(() => {
    setWords(createSortingRound());
    setSorted({});
    setDrag(null);
    setHoverVase(null);
    setFeedback(null);
    setPhase("play");
  }, []);

  useEffect(() => {
    if (mounted && !passed && words.length === 0) {
      startRound();
    }
  }, [mounted, passed, words.length, startRound]);

  const skipGame = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setPassed(true);
  };

  const handleWin = useCallback(() => {
    setPhase("won");
    localStorage.setItem(STORAGE_KEY, "true");
    window.setTimeout(() => setPassed(true), WIN_DELAY_MS);
  }, []);

  const placeBubble = useCallback(
    (word: GameWord, vase: GameCategory) => {
      if (word.category === vase) {
        setSorted((prev) => {
          const next = { ...prev, [word.id]: vase };
          if (Object.keys(next).length === words.length) {
            window.setTimeout(handleWin, 400);
          }
          return next;
        });
        setFeedback(null);
      } else {
        setFeedback("wrong");
        window.setTimeout(() => setFeedback(null), 1200);
      }
    },
    [words.length, handleWin],
  );

  const onBubblePointerDown = (e: ReactPointerEvent, word: GameWord) => {
    if (phase === "won" || sorted[word.id]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setDrag({
      id: word.id,
      x: e.clientX,
      y: e.clientY,
      width: rect.width,
      height: rect.height,
    });
    setFeedback(null);
  };

  useEffect(() => {
    if (!drag) return;

    const onMove = (e: globalThis.PointerEvent) => {
      setDrag((prev) => (prev ? { ...prev, x: e.clientX, y: e.clientY } : null));
      setHoverVase(hitVase(e.clientX, e.clientY, vaseRefs.current));
    };

    const onUp = (e: globalThis.PointerEvent) => {
      const word = words.find((w) => w.id === drag.id);
      if (!word) return;
      const vase = hitVase(e.clientX, e.clientY, vaseRefs.current);
      if (vase) placeBubble(word, vase);
      setDrag(null);
      setHoverVase(null);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [drag, words, placeBubble]);

  if (!mounted) {
    return <div className={styles.hidden}>{children}</div>;
  }

  if (passed) {
    return <>{children}</>;
  }

  const floating = words.filter((w) => !sorted[w.id]);
  const progressLine = t("game.progress")
    .replace("{n}", String(sortedCount))
    .replace("{total}", String(total));

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
              <p className={styles.winMessage}>{t("game.success")}</p>
            </div>
          ) : (
            <>
              <h1 id="game-title" className={styles.title}>
                {t("game.title")}
              </h1>
              <RichText as="p" className={styles.subtitle} text={t("game.subtitle")} />
              <p className={styles.meta}>{progressLine}</p>

              <div className={styles.floatArena} aria-label={t("game.arenaLabel")}>
                <div className={styles.arenaGlow} aria-hidden />
                {floating.map((word) => {
                  const isDragging = drag?.id === word.id;
                  if (isDragging) return null;
                  return (
                    <div
                      key={word.id}
                      className={styles.bubble}
                      style={bubbleFloatStyle(word.id)}
                      onPointerDown={(e) => onBubblePointerDown(e, word)}
                    >
                      <span className={styles.bubbleShine} aria-hidden />
                      <span className={styles.bubbleLabel}>
                        {locale === "en" ? word.labelEn : word.labelFr}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className={styles.vasesRow}>
                {VASE_ORDER.map((cat) => {
                  const inVase = words.filter((w) => sorted[w.id] === cat);
                  return (
                    <div
                      key={cat}
                      ref={(el) => {
                        vaseRefs.current[cat] = el;
                      }}
                      className={`${styles.vaseWrap} ${hoverVase === cat ? styles.vaseHover : ""}`}
                    >
                      <div className={`${styles.vase} ${styles[`vase_${cat}`]}`}>
                        <div className={styles.vaseNeck} />
                        <div className={styles.vaseRim}>
                          <span className={styles.vaseIcon} aria-hidden>
                            {VASE_ICONS[cat]}
                          </span>
                        </div>
                        <div className={styles.vaseBody}>
                          <span className={styles.vaseGloss} aria-hidden />
                          <div className={styles.vaseLabel}>{t(VASE_LABEL_KEYS[cat])}</div>
                          <div className={styles.vaseItems}>
                            {inVase.map((w) => (
                              <span key={w.id} className={styles.vaseChip}>
                                {locale === "en" ? w.labelEn : w.labelFr}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className={styles.vaseFoot} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {feedback === "wrong" ? (
                <p className={`${styles.feedback} ${styles.feedbackErr}`}>{t("game.wrongDrop")}</p>
              ) : (
                <p className={styles.hint}>{t("game.hint")}</p>
              )}

              <div className={styles.actions}>
                <button type="button" className={styles.skipQuiz} onClick={skipGame}>
                  {t("game.skipQuiz")}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {drag ? (
        <div
          className={`${styles.bubble} ${styles.bubbleDragging}`}
          style={{
            left: drag.x - drag.width / 2,
            top: drag.y - drag.height / 2,
            width: drag.width,
          }}
          aria-hidden
        >
          <span className={styles.bubbleShine} aria-hidden />
          <span className={styles.bubbleLabel}>
            {locale === "en"
              ? words.find((w) => w.id === drag.id)?.labelEn
              : words.find((w) => w.id === drag.id)?.labelFr}
          </span>
        </div>
      ) : null}

      <div aria-hidden className={styles.hidden}>
        {children}
      </div>
    </>
  );
}
