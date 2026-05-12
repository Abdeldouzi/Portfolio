"use client";

import Link from "next/link";
import { RichText } from "../../../components/RichText";
import { useLocale } from "../../../context/LocaleContext";
import styles from "../../inner-page.module.css";

export default function RiadAlBadunPage() {
  const { t } = useLocale();

  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <Link href="/projets" aria-label={t("projects.backAria")}>
          &larr;
        </Link>
        <img
          src="/riad-al-badun/logo.png"
          alt={t("riad.alt")}
          className={styles.projectLogoOnly}
        />
        <RichText as="p" className={styles.subtitle} text={t("riad.lead")} />
        <a
          href="/docs/Dossier-de-projet-Riad-Al-Badun.docx"
          download
          className={styles.downloadLink}
        >
          <RichText text={t("riad.download")} />
        </a>
      </section>

      <section className={styles.card}>
        <h2>{t("riad.ctx")}</h2>
        <RichText as="p" className={styles.subtitle} text={t("riad.ctxBody")} />
      </section>

      <section className={styles.card}>
        <h2>{t("riad.features")}</h2>
        <ul className={styles.bullets}>
          <li>
            <RichText text={t("riad.f1")} />
          </li>
          <li>
            <RichText text={t("riad.f2")} />
          </li>
          <li>
            <RichText text={t("riad.f3")} />
          </li>
          <li>
            <RichText text={t("riad.f4")} />
          </li>
          <li>
            <RichText text={t("riad.f5")} />
          </li>
          <li>
            <RichText text={t("riad.f6")} />
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>{t("riad.stack")}</h2>
        <ul className={styles.bullets}>
          <li>
            <RichText text={t("riad.s1")} />
          </li>
          <li>
            <RichText text={t("riad.s2")} />
          </li>
          <li>
            <RichText text={t("riad.s3")} />
          </li>
          <li>
            <RichText text={t("riad.s4")} />
          </li>
          <li>
            <RichText text={t("riad.s5")} />
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>{t("riad.arch")}</h2>
        <ul className={styles.bullets}>
          <li>
            <RichText text={t("riad.a1")} />
          </li>
          <li>
            <RichText text={t("riad.a2")} />
          </li>
          <li>
            <RichText text={t("riad.a3")} />
          </li>
          <li>
            <RichText text={t("riad.a4")} />
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>{t("riad.sec")}</h2>
        <ul className={styles.bullets}>
          <li>
            <RichText text={t("riad.sec1")} />
          </li>
          <li>
            <RichText text={t("riad.sec2")} />
          </li>
          <li>
            <RichText text={t("riad.sec3")} />
          </li>
          <li>
            <RichText text={t("riad.sec4")} />
          </li>
          <li>
            <RichText text={t("riad.sec5")} />
          </li>
        </ul>
      </section>
    </div>
  );
}
