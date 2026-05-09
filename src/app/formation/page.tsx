import styles from "../inner-page.module.css";

export default function FormationPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>Formation</h1>
        <p className={styles.subtitle}>Mon parcours scolaire et académique.</p>
      </section>

      <section className={styles.card}>
        <div className={styles.list}>
          <article className={styles.item}>
            <h3>Master Expert Lead Développeur Fullstack - ITIC Paris</h3>
            <p className={styles.meta}>Sept. 2026 - Sept. 2028</p>
          </article>
          <article className={styles.item}>
            <h3>
              Bac +3 Concepteur Développeur d&apos;Applications - Doranco,
              Bagnolet
            </h3>
            <p className={styles.meta}>Oct. 2024 - Juil. 2025</p>
          </article>
          <article className={styles.item}>
            <h3>
              BTS Services Informatiques aux Organisations (SIO) - Lycée Louis
              Armand, Paris 15
            </h3>
            <p className={styles.meta}>Sept. 2022 - Juin 2024</p>
          </article>
          <article className={styles.item}>
            <h3>
              Baccalauréat Général - Maths & Sciences Économiques - Lycée Van
              Gogh, Ermont
            </h3>
            <p className={styles.meta}>Sept. 2019 - Juin 2022</p>
          </article>
        </div>
      </section>
    </div>
  );
}
