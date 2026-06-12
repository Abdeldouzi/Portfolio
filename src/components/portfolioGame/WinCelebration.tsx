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
        delay: `${Math.random() * 0.9}s`,
        duration: `${2.2 + Math.random() * 1.1}s`,
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
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: `${10 + i * 11 + Math.random() * 8}%`,
        top: `${16 + Math.random() * 38}%`,
        delay: `${i * 0.28}s`,
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
