"use client";

import Link from "next/link";
import { useLocale } from "../../context/LocaleContext";
import styles from "../inner-page.module.css";

const projects = [
  {
    id: "riad",
    title: "Riad Al Badun",
    href: "/projets/riad-al-badun",
    logo: "/riad-al-badun/logo.png",
    pitchKey: "projects.riadPitch",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JavaMail",
      "Maven",
      "MySQL",
      "MongoDB",
      "SQL",
      "JPA",
      "Hibernate",
      "phpMyAdmin",
      "JWT",
      "BCrypt",
      "Stripe",
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Render",
      "Postman",
      "Trello",
      "Figma",
      "VS Code",
      "JUnit",
      "Mockito",
      "Merise",
      "UML",
      "PlantUML",
    ],
  },
  {
    id: "gilla",
    title: "GILLA",
    href: "/projets/gilla",
    logo: "/gilla/01-logo-gilla.png",
    pitchKey: "projects.gillaPitch",
    tags: ["Joomla", "PHP", "SQL", "HTML", "CSS", "Android", "GitHub", "Looping", "PlantUML"],
  },
] as const;

export default function ProjectsPage() {
  const { t } = useLocale();

  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>{t("projects.title")}</h1>
        <p className={styles.subtitle}>{t("projects.subtitle")}</p>
      </section>

      <section className={styles.card}>
        <div className={`${styles.list} ${styles.projectsList}`}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className={`${styles.item} ${styles.projectCard}`}
            >
              <h3 className={styles.projectCardTitle}>
                {project.title}
                {project.logo ? (
                  <img
                    src={project.logo}
                    alt={`${t("projects.logoAlt")} ${project.title}`}
                    className={styles.projectCardThumb}
                  />
                ) : null}
              </h3>
              <p className={styles.projectCardPitch}>{t(project.pitchKey)}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.projectTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
