"use client";

import { useMemo } from "react";
import styles from "./WinCelebration.module.css";

const COLORS = ["#f59e0b", "#10b981", "#3b82f6", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6"];

type ConfettiPiece = {
  id: number;
  left: string;
  delay: string;
  duration: string;
  color: string;
  rotation: string;
  width: number;
  height: number;
  drift: string;
};

type FireworkBurst = {
  id: number;
  left: string;
  top: string;
  delay: string;
  color: string;
};

export function WinCelebration() {
  const confetti = useMemo<ConfettiPiece[]>(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 0.55}s`,
        duration: `${1.4 + Math.random() * 0.9}s`,
        color: COLORS[i % COLORS.length],
        rotation: `${Math.random() * 360}deg`,
        width: 5 + Math.random() * 5,
        height: 8 + Math.random() * 7,
        drift: `${-40 + Math.random() * 80}px`,
      })),
    [],
  );

  const fireworks = useMemo<FireworkBurst[]>(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        left: `${12 + i * 14 + Math.random() * 8}%`,
        top: `${18 + Math.random() * 35}%`,
        delay: `${i * 0.18}s`,
        color: COLORS[(i + 2) % COLORS.length],
      })),
    [],
  );

  return (
    <div className={styles.celebration} aria-hidden>
      {fireworks.map((burst) => (
        <div
          key={burst.id}
          className={styles.firework}
          style={{
            left: burst.left,
            top: burst.top,
            ["--burst-delay" as string]: burst.delay,
            ["--burst-color" as string]: burst.color,
          }}
        >
          {Array.from({ length: 10 }, (_, sparkIndex) => (
            <span
              key={sparkIndex}
              className={styles.spark}
              style={{ ["--spark-angle" as string]: `${sparkIndex * 36}deg` }}
            />
          ))}
        </div>
      ))}

      {confetti.map((piece) => (
        <span
          key={piece.id}
          className={styles.confetti}
          style={{
            left: piece.left,
            width: piece.width,
            height: piece.height,
            backgroundColor: piece.color,
            ["--confetti-delay" as string]: piece.delay,
            ["--confetti-dur" as string]: piece.duration,
            ["--confetti-rot" as string]: piece.rotation,
            ["--confetti-drift" as string]: piece.drift,
          }}
        />
      ))}
    </div>
  );
}
