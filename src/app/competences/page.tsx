import styles from "../inner-page.module.css";
import Image from "next/image";

const skills = {
  languages: [
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "NoSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ],
  frameworks: [
    { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "JUnit", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ],
  databases: [
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PhpMyAdmin", img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/phpmyadmin.svg" },
  ],
  tools: [
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Maven", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ],
  cms: [
    { name: "WordPress", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  ],
};

export default function CompetencesPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>Compétences</h1>
        <p className={styles.subtitle}>Ma stack technique et mes outils</p>
      </section>

      <section className={styles.card}>
        <div className={styles.list}>
          <article className={styles.item}>
            <h3>Langages</h3>
            <div className={styles.skillsGrid}>
              {skills.languages.map((skill) => (
                <div key={skill.name} className={styles.skill}>
                  <Image src={skill.img} alt={skill.name} width={50} height={50} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
          <article className={styles.item}>
            <h3>Frameworks & Bibliothèques</h3>
            <div className={styles.skillsGrid}>
              {skills.frameworks.map((skill) => (
                <div key={skill.name} className={styles.skill}>
                  <Image src={skill.img} alt={skill.name} width={50} height={50} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
          <article className={styles.item}>
            <h3>Bases de données</h3>
            <div className={styles.skillsGrid}>
              {skills.databases.map((skill) => (
                <div key={skill.name} className={styles.skill}>
                  <Image src={skill.img} alt={skill.name} width={50} height={50} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
          <article className={styles.item}>
            <h3>Outils & DevOps</h3>
            <div className={styles.skillsGrid}>
              {skills.tools.map((skill) => (
                <div key={skill.name} className={styles.skill}>
                  <Image src={skill.img} alt={skill.name} width={50} height={50} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
          <article className={styles.item}>
            <h3>CMS & Design</h3>
            <div className={styles.skillsGrid}>
              {skills.cms.map((skill) => (
                <div key={skill.name} className={styles.skill}>
                  <Image src={skill.img} alt={skill.name} width={50} height={50} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
