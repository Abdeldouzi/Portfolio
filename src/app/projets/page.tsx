"use client";

import Link from "next/link";
import { useLocale } from "../../context/LocaleContext";
import styles from "../inner-page.module.css";

const projects = [
  {
    title: "Riad Al Badun",
    href: "/projets/riad-al-badun",
    logo: "/riad-al-badun/logo.png",
  },
  { title: "GILLA", href: "/projets/gilla", logo: "/gilla/01-logo-gilla.png" },
];

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
              key={project.title}
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
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
