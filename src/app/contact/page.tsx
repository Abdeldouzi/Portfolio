import styles from "../inner-page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.subtitle}>
          Je suis actuellement à la recherche d&apos;une alternance en tant que
          développeur full stack.
        </p>
      </section>

      <section className={styles.card}>
        <div className={styles.list}>
          <article className={styles.item}>
            <h3>Email</h3>
            <p>abdeldouzi.pro@gmail.com</p>
          </article>
          <article className={styles.item}>
            <h3>LinkedIn</h3>
            <p>https://www.linkedin.com/in/abdel-karim-douzi/</p>
          </article>
          <article className={styles.item}>
            <h3>GitHub</h3>
            <p>https://github.com/Abdeldouzi</p>
          </article>
        </div>
      </section>
    </div>
  );
}
