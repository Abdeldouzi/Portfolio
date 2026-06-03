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
      description:
        locale === "fr"
          ? "Master en Expert Lead Développeur Full Stack - Approfondissement en architecture logicielle, leadership technique et gestion de projets."
          : "Master's degree in Expert Lead Full Stack Developer - In-depth study of software architecture, technical leadership and project management.",
      type: "education",
    },
    {
      id: "cda",
      title: t("formation.cda"),
      subtitle: locale === "fr" ? "Doranco, Bagnolet" : "Doranco, Bagnolet",
      date: t("formation.cdadates"),
      description:
        locale === "fr"
          ? "Bac +3 - Concepteur Développeur d'Applications : développement full stack, gestion de projets, conception logicielle."
          : "Bachelor's level - Application Developer Designer: full stack development, project management, software design.",
      type: "education",
    },
    {
      id: "bts",
      title: t("formation.bts"),
      subtitle: locale === "fr" ? "Lycée Louis Armand, Paris 15" : "Lycée Louis Armand, Paris 15",
      date: t("formation.btsdates"),
      description:
        locale === "fr"
          ? "BTS Services Informatiques aux Organisations (SIO) - Spécialisation en développement et infrastructure IT."
          : "BTS IT Services - Specialization in development and IT infrastructure.",
      type: "education",
    },
    {
      id: "bac",
      title: t("formation.bac"),
      subtitle: locale === "fr" ? "Lycée Van Gogh, Ermont" : "Lycée Van Gogh, Ermont",
      date: t("formation.bacdates"),
      description:
        locale === "fr"
          ? "Baccalauréat Général - Mathématiques & Sciences Économiques"
          : "General Secondary School Diploma - Mathematics & Economics",
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
