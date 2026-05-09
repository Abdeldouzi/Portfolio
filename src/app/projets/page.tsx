import Link from "next/link";
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
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>Projets</h1>
        <p className={styles.subtitle}>
          Sélection de mes projets les plus représentatifs.
        </p>
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
                    alt={`Logo ${project.title}`}
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
