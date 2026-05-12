"use client";

import { RichText } from "../../components/RichText";
import { useLocale } from "../../context/LocaleContext";
import styles from "../inner-page.module.css";

export default function ExperiencePage() {
  const { t } = useLocale();

  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>{t("experience.title")}</h1>
        <p className={styles.subtitle}>{t("experience.subtitle")}</p>
      </section>

      <section className={styles.card}>
        <div className={styles.list}>
          <article className={styles.item}>
            <h3>{t("experience.dadiTitle")}</h3>
            <p className={styles.meta}>{t("experience.dadiDates")}</p>
            <ul className={styles.bullets}>
              <li>
                <RichText text={t("experience.dadi1")} />
              </li>
              <li>
                <RichText text={t("experience.dadi2")} />
              </li>
              <li>
                <RichText text={t("experience.dadi3")} />
              </li>
              <li>
                <RichText text={t("experience.dadi4")} />
              </li>
              <li>
                <RichText text={t("experience.dadi5")} />
              </li>
            </ul>
          </article>

          <article className={styles.item}>
            <h3>{t("experience.easyTitle")}</h3>
            <p className={styles.meta}>{t("experience.easyDates")}</p>
            <ul className={styles.bullets}>
              <li>
                <RichText text={t("experience.easy1")} />
              </li>
              <li>
                <RichText text={t("experience.easy2")} />
              </li>
              <li>
                <RichText text={t("experience.easy3")} />
              </li>
            </ul>
          </article>

          <article className={styles.item}>
            <h3>{t("experience.boisTitle")}</h3>
            <p className={styles.meta}>{t("experience.boisDates")}</p>
            <ul className={styles.bullets}>
              <li>
                <RichText text={t("experience.bois1")} />
              </li>
              <li>
                <RichText text={t("experience.bois2")} />
              </li>
              <li>
                <RichText text={t("experience.bois3")} />
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
