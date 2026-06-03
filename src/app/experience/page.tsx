"use client";

import { useLocale } from "../../context/LocaleContext";
import { Timeline, type TimelineItem } from "../../components/Timeline/Timeline";
import styles from "../inner-page.module.css";

export default function ExperiencePage() {
  const { t, locale } = useLocale();

  const timelineItems: TimelineItem[] = [
    {
      id: "dadi",
      title: t("experience.dadiTitle"),
      subtitle: locale === "fr" ? "Dadi Tech" : "Dadi Tech",
      date: t("experience.dadiDates"),
      description:
        locale === "fr"
          ? "Développement full stack d'une plateforme éducative pour le système scolaire sénégalais utilisant Java, Spring Boot et React."
          : "Full stack development of an educational platform for the Senegalese education system using Java, Spring Boot and React.",
      type: "experience",
    },
    {
      id: "easy",
      title: t("experience.easyTitle"),
      subtitle: locale === "fr" ? "EasyFormers" : "EasyFormers",
      date: t("experience.easyDates"),
      description:
        locale === "fr"
          ? "Conception de site WordPress et développement d'un site dynamique HTML/CSS/PHP avec base de données SQL."
          : "WordPress site design and development of a dynamic HTML/CSS/PHP website with SQL database.",
      type: "experience",
    },
    {
      id: "bois",
      title: t("experience.boisTitle"),
      subtitle: locale === "fr" ? "Bois De Chauff 95" : "Bois De Chauff 95",
      date: t("experience.boisDates"),
      description:
        locale === "fr"
          ? "Maintenance corrective et évolutive d'un site e-commerce PrestaShop avec gestion des produits et requêtes SQL."
          : "Corrective and evolutionary maintenance of a PrestaShop e-commerce site with product management and SQL queries.",
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
