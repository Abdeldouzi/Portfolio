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
      subtitle: "Dadi Tech",
      date: t("experience.dadiDates"),
      description:
        locale === "fr"
          ? `• ${t("experience.dadi1")}\n• ${t("experience.dadi2")}\n• ${t("experience.dadi3")}\n• ${t("experience.dadi4")}\n• ${t("experience.dadi5")}`
          : "• Full stack development of an educational platform for the Senegalese education system (Java, Spring Boot, React)\n• Designed and implemented the back-end: student, teacher, class and school year management (add, modify, deletion) via REST API\n• Modeled functionalities with a UML diagram covering administrator, teacher and student roles\n• Integrated administration features (statistics, establishment management, study levels) on the front-end\n• Set up a relational SQL database and ensured data persistence with Spring Data JPA\n• Adopted a hexagonal architecture (ports & adapters) and microservices approach\n• Worked using Agile Scrum: daily meetings, sprint planning and Jira monitoring",
      type: "experience",
    },
    {
      id: "easy",
      title: t("experience.easyTitle"),
      subtitle: "EasyFormers",
      date: t("experience.easyDates"),
      description:
        locale === "fr"
          ? `• ${t("experience.easy1")}\n• ${t("experience.easy2")}\n• ${t("experience.easy3")}`
          : "• Designed and customized a WordPress site (structure, design, content integration)\n• Developed a dynamic HTML/CSS/PHP site connected to a SQL database\n• Implemented registration, login, internal messaging and quote request features",
      type: "experience",
    },
    {
      id: "bois",
      title: t("experience.boisTitle"),
      subtitle: "Bois De Chauff 95",
      date: t("experience.boisDates"),
      description:
        locale === "fr"
          ? `• ${t("experience.bois1")}\n• ${t("experience.bois2")}\n• ${t("experience.bois3")}`
          : "• Ensured corrective and evolutionary maintenance of a PrestaShop e-commerce site\n• Updated product sheets, categories and delivery parameters via the PrestaShop back-office\n• Performed direct SQL queries on the database (MySQL) to fix data anomalies",
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
