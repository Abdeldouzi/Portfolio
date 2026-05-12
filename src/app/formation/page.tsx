"use client";

import { useLocale } from "../../context/LocaleContext";
import styles from "../inner-page.module.css";

export default function FormationPage() {
  const { t } = useLocale();

  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>{t("formation.title")}</h1>
        <p className={styles.subtitle}>{t("formation.subtitle")}</p>
      </section>

      <section className={styles.card}>
        <div className={styles.list}>
          <article className={styles.item}>
            <h3>{t("formation.m1")}</h3>
            <p className={styles.meta}>{t("formation.m1dates")}</p>
          </article>
          <article className={styles.item}>
            <h3>{t("formation.cda")}</h3>
            <p className={styles.meta}>{t("formation.cdadates")}</p>
          </article>
          <article className={styles.item}>
            <h3>{t("formation.bts")}</h3>
            <p className={styles.meta}>{t("formation.btsdates")}</p>
          </article>
          <article className={styles.item}>
            <h3>{t("formation.bac")}</h3>
            <p className={styles.meta}>{t("formation.bacdates")}</p>
          </article>
        </div>
      </section>
    </div>
  );
}
