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
          ? `• ${t("experience.dadi1")}\n• ${t("experience.dadi2")}\n• ${t("experience.dadi3")}\n• ${t("experience.dadi4")}\n• ${t("experience.dadi5")}`
          : "• Full stack development of an educational platform for the Senegalese education system (Java, Spring Boot, React).\n• Back-end design: student, teacher, class and school year management via REST APIs.\n• UML modeling of features with admin, teacher and student use cases.\n• Integration of administration features (statistics, establishments, study levels) on front-end.\n• SQL database setup and data persistence with Spring Data JPA.",
      type: "experience",
    },
    {
      id: "easy",
      title: t("experience.easyTitle"),
      subtitle: locale === "fr" ? "EasyFormers" : "EasyFormers",
      date: t("experience.easyDates"),
      description:
        locale === "fr"
          ? `• ${t("experience.easy1")}\n• ${t("experience.easy2")}\n• ${t("experience.easy3")}`
          : "• Design and customization of a WordPress site (structure, design, content integration).\n• Development of a dynamic HTML/CSS/PHP site connected to a SQL database.\n• Implementation of registration, login, internal messaging and quote request features.",
      type: "experience",
    },
    {
      id: "bois",
      title: t("experience.boisTitle"),
      subtitle: locale === "fr" ? "Bois De Chauff 95" : "Bois De Chauff 95",
      date: t("experience.boisDates"),
      description:
        locale === "fr"
          ? `• ${t("experience.bois1")}\n• ${t("experience.bois2")}\n• ${t("experience.bois3")}`
          : "• Corrective and evolutionary maintenance of a PrestaShop e-commerce site.\n• Product sheet updates, categories and delivery parameters via back-office.\n• Direct SQL queries (MySQL) to fix data anomalies.",
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
