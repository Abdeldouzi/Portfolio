"use client";

import { useLocale } from "../../context/LocaleContext";
import { Timeline, type TimelineItem } from "../../components/Timeline/Timeline";
import styles from "../inner-page.module.css";

export default function FormationPage() {
  const { t, locale } = useLocale();

  const timelineItems: TimelineItem[] = [
    {
      id: "m1",
      title: t("formation.m1"),
      subtitle: locale === "fr" ? "ITIC Paris" : "ITIC Paris",
      date: t("formation.m1dates"),
      type: "education",
    },
    {
      id: "cda",
      title: t("formation.cda"),
      subtitle: locale === "fr" ? "Doranco, Bagnolet" : "Doranco, Bagnolet",
      date: t("formation.cdadates"),
      type: "education",
    },
    {
      id: "bts",
      title: t("formation.bts"),
      subtitle: locale === "fr" ? "Lycée Louis Armand, Paris 15" : "Lycée Louis Armand, Paris 15",
      date: t("formation.btsdates"),
      type: "education",
    },
    {
      id: "bac",
      title: t("formation.bac"),
      subtitle: locale === "fr" ? "Lycée Van Gogh, Ermont" : "Lycée Van Gogh, Ermont",
      date: t("formation.bacdates"),
      type: "education",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>{t("formation.title")}</h1>
        <p className={styles.subtitle}>{t("formation.subtitle")}</p>
      </section>

      <section className={styles.card}>
        <Timeline items={timelineItems} />
      </section>
    </div>
  );
}
