import Link from "next/link";
import styles from "../../inner-page.module.css";

export default function BlogPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <Link href="/projets" aria-label="Retour aux projets">&larr;</Link>
        <h1 className={styles.title}>Blog</h1>
      </section>
    </div>
  );
}
