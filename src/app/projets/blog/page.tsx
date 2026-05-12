"use client";

import Link from "next/link";
import { useLocale } from "../../../context/LocaleContext";
import styles from "../../inner-page.module.css";

export default function BlogPage() {
  const { t } = useLocale();

  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <Link href="/projets" aria-label={t("projects.backAria")}>
          &larr;
        </Link>
        <h1 className={styles.title}>{t("blog.title")}</h1>
      </section>
    </div>
  );
}
