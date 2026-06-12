"use client";

import Link from "next/link";
import { useLocale } from "../../context/LocaleContext";
import styles from "../inner-page.module.css";

type ProjectStackItem = {
  name: string;
  img: string;
};

const projects = [
  {
    id: "riad",
    title: "Riad Al Badun",
    href: "/projets/riad-al-badun",
    logo: "/riad-al-badun/logo.png",
    pitchKey: "projects.riadPitch",
    stack: [
      {
        name: "Next.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Java",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "MySQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      { name: "Stripe", img: "/icons/stripe.svg" },
      {
        name: "Docker",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ] satisfies ProjectStackItem[],
  },
  {
    id: "gilla",
    title: "GILLA",
    href: "/projets/gilla",
    logo: "/gilla/01-logo-gilla.png",
    pitchKey: "projects.gillaPitch",
    stack: [
      {
        name: "Joomla",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
      },
      {
        name: "PHP",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "SQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "HTML",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Android",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },
      {
        name: "GitHub",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      { name: "Looping", img: "/icons/looping.svg" },
      { name: "PlantUML", img: "/icons/plantuml.svg" },
    ] satisfies ProjectStackItem[],
    extraTags: ["MVC"],
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
              <div className={styles.projectStack}>
                {project.stack.map((tech) => (
                  <div key={tech.name} className={styles.projectStackItem}>
                    <img src={tech.img} alt={tech.name} className={styles.projectStackIcon} />
                    <span className={styles.projectStackLabel}>{tech.name}</span>
                  </div>
                ))}
              </div>
              {"extraTags" in project && project.extraTags ? (
                <div className={styles.projectTags}>
                  {project.extraTags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
