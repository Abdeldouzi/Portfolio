import styles from "../inner-page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>Qui suis-je ?</h1>
        <p className={styles.subtitle}>
          Bonjour, je m&apos;appelle <strong>Abdel-Karim Douzi</strong>.{" "}
          <strong>Développeur web full stack</strong>, je conçois des applications web
          complètes, du <strong>back-end</strong> au <strong>front-end</strong>, avec un
          fort intérêt pour les architectures
          performantes et modulaires.
        </p>
      </section>

      <section className={styles.card}>
        <p className={styles.subtitle}>
          Je suis à la recherche d&apos;une alternance en tant que{" "}
          <strong>développeur full stack</strong> pour <strong>septembre 2026</strong>.
          Mon objectif est de rejoindre une équipe dynamique où je pourrai participer à
          des projets web concrets tout en renforçant mes compétences en développement
          et en expérience utilisateur. J&apos;ai développé des applications en{" "}
          <strong>Java</strong>, <strong>JavaScript</strong>, <strong>React</strong>{" "}
          et <strong>Next.js</strong>, avec une expérience sur des applications web,
          des API REST et des interfaces utilisateur. J&apos;aime travailler sur des
          solutions fiables, maintenables et orientées utilisateur. Je suis motivé par
          l&apos;apprentissage continu et je souhaite évoluer dans un environnement
          stimulant, en contribuant à des produits numériques de qualité et en
          approfondissant mes compétences en développement full stack.
        </p>
      </section>
    </div>
  );
}
