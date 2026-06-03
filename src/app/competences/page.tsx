"use client";

import { useLocale } from "../../context/LocaleContext";
import { TechStack, type Tech } from "../../components/TechStack/TechStack";
import styles from "../inner-page.module.css";

const techs: Tech[] = [
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "backend" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend" },
  { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "backend" },
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "database" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "database" },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "database" },
  { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "backend" },
  { name: "Spring Security", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "backend" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend" },
  { name: "JUnit", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg", category: "tools" },
  { name: "Mockito", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "tools" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "frontend" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "tools" },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "tools" },
  { name: "Maven", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg", category: "tools" },
  { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", category: "tools" },
  { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "tools" },
  { name: "Trello", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg", category: "tools" },
  { name: "Jira", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", category: "tools" },
  { name: "WordPress", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg", category: "cms" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "cms" },
  { name: "Canva", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", category: "cms" },
];

export default function CompetencesPage() {
  const { t } = useLocale();

  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>{t("skills.title")}</h1>
        <p className={styles.subtitle}>{t("skills.subtitle")}</p>
      </section>

      <section className={styles.card}>
        <TechStack techs={techs} />
      </section>
    </div>
  );
}
