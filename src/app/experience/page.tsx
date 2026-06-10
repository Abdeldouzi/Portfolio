"use client";

import { useLocale } from "../../context/LocaleContext";
import { Timeline, type TimelineItem } from "../../components/Timeline/Timeline";
import styles from "../inner-page.module.css";

export default function ExperiencePage() {
  const { t } = useLocale();

  const timelineItems: TimelineItem[] = [
    {
      id: "dadi",
      title: t("experience.dadiTitle"),
      subtitle: "Dadi Tech",
      date: t("experience.dadiDates"),
      description: [
        t("experience.dadi1"),
        t("experience.dadi2"),
        t("experience.dadi3"),
        t("experience.dadi4"),
        t("experience.dadi5"),
        t("experience.dadi6"),
        t("experience.dadi7"),
      ]
        .map((line) => `• ${line}`)
        .join("\n"),
      type: "experience",
    },
    {
      id: "easy",
      title: t("experience.easyTitle"),
      subtitle: "EasyFormers",
      date: t("experience.easyDates"),
      description: [t("experience.easy1"), t("experience.easy2"), t("experience.easy3")]
        .map((line) => `• ${line}`)
        .join("\n"),
      type: "experience",
    },
    {
      id: "bois",
      title: t("experience.boisTitle"),
      subtitle: "Bois De Chauff 95",
      date: t("experience.boisDates"),
      description: [t("experience.bois1"), t("experience.bois2"), t("experience.bois3")]
        .map((line) => `• ${line}`)
        .join("\n"),
      type: "experience",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>{t("experience.title")}</h1>
        <p className={styles.subtitle}>{t("experience.subtitle")}</p>
      </section>

      <section className={styles.card}>
        <Timeline items={timelineItems} />
      </section>
    </div>
  );
}
