"use client";

import Link from "next/link";
import { RichText } from "../../../components/RichText";
import { useLocale } from "../../../context/LocaleContext";
import styles from "../../inner-page.module.css";

export default function GillaPage() {
  const { t } = useLocale();

  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <Link href="/projets" aria-label={t("projects.backAria")}>
          &larr;
        </Link>
        <img
          src="/gilla/01-logo-gilla.png"
          alt={t("gilla.logoAlt")}
          className={styles.projectLogoOnly}
        />
      </section>

      <section className={styles.card}>
        <h2>{t("gilla.cdcTitle")}</h2>
        <RichText as="p" className={styles.subtitle} text={t("gilla.cdcBody")} />
      </section>

      <section className={styles.card}>
        <h2>{t("gilla.existingTitle")}</h2>
        <RichText as="p" className={styles.subtitle} text={t("gilla.existingBody")} />
      </section>

      <section className={styles.card}>
        <h2>{t("gilla.needsTitle")}</h2>
        <RichText as="p" className={styles.subtitle} text={t("gilla.needsIntro")} />
        <ul className={styles.bullets}>
          <li>
            <RichText text={t("gilla.needs1")} />
          </li>
          <li>
            <RichText text={t("gilla.needs2")} />
          </li>
          <li>
            <RichText text={t("gilla.needs3")} />
          </li>
          <li>
            <RichText text={t("gilla.needs4")} />
          </li>
          <li>
            <RichText text={t("gilla.needs5")} />
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>{t("gilla.orgTitle")}</h2>
        <RichText as="p" className={styles.subtitle} text={t("gilla.org1Intro")} />
        <ul className={styles.bullets}>
          <li>
            <RichText text={t("gilla.org11")} />
          </li>
          <li>
            <RichText text={t("gilla.org12")} />
          </li>
          <li>
            <RichText text={t("gilla.org13")} />
          </li>
        </ul>

        <RichText as="p" className={styles.subtitle} text={t("gilla.org2")} />
        <img
          src="/gilla/02-cycle-v.png"
          alt={t("gilla.altCycleV")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.org3")} />
        <img
          src="/gilla/03-github.png"
          alt={t("gilla.altGithub")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.org4")} />
        <ul className={styles.bullets}>
          <li>
            <RichText text={t("gilla.mvc1")} />
          </li>
          <li>
            <RichText text={t("gilla.mvc2")} />
          </li>
          <li>
            <RichText text={t("gilla.mvc3")} />
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>{t("gilla.contribTitle")}</h2>
        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib1")} />
        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib2")} />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib3")} />
        <img
          src="/gilla/04-repartition-backend.png"
          alt={t("gilla.altSplitBe")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib4")} />
        <img
          src="/gilla/05-pec-backend.png"
          alt={t("gilla.altPecBe")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib5")} />
        <img
          src="/gilla/06-commentaire-xml.png"
          alt={t("gilla.altXmlComment")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib6")} />
        <img
          src="/gilla/07-edit-php.png"
          alt={t("gilla.altEditPhp")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib7")} />
        <img
          src="/gilla/08-repartition-frontend.png"
          alt={t("gilla.altSplitFe")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib8")} />
        <img
          src="/gilla/12-donnees-agent.png"
          alt={t("gilla.altAssignments")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib9")} />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib10")} />
        <img
          src="/gilla/13-agent-xml-correct.png"
          alt={t("gilla.altAgentXml")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib11")} />
        <img
          src="/gilla/14-sql-correct.png"
          alt={t("gilla.altSqlAssign")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib12")} />
        <img
          src="/gilla/15-colonne-correct.png"
          alt={t("gilla.altAgentCol")}
          className={styles.projectImage}
        />

        <RichText as="p" className={styles.subtitle} text={t("gilla.contrib13")} />
        <img
          src="/gilla/16-donnees-correct.png"
          alt={t("gilla.altAgentData")}
          className={styles.projectImage}
        />
      </section>

      <section className={styles.card}>
        <h2>{t("gilla.testTitle")}</h2>
        <RichText as="p" className={styles.subtitle} text={t("gilla.testBody")} />
        <img
          src="/gilla/17-test-backend.png"
          alt={t("gilla.altTestBe")}
          className={styles.projectImage}
        />
        <img
          src="/gilla/18-test-frontend.png"
          alt={t("gilla.altTestFe")}
          className={styles.projectImage}
        />
      </section>

      <section className={styles.card}>
        <h2>{t("gilla.androidTitle")}</h2>
        <RichText as="p" className={styles.subtitle} text={t("gilla.androidBody")} />
        <img
          src="/gilla/19-android-emulator.png"
          alt={t("gilla.altAndroidEmu")}
          className={styles.androidImage}
        />
        <img
          src="/gilla/20-android-xml.png"
          alt={t("gilla.altAndroidXml")}
          className={styles.androidImage}
        />
      </section>

      <section className={styles.card}>
        <h2>{t("gilla.backupsTitle")}</h2>
        <img
          src="/gilla/21-commits.png"
          alt={t("gilla.altCommits")}
          className={styles.projectImage}
        />
        <h2>{t("gilla.meansTitle")}</h2>
        <img
          src="/gilla/22-ressources.png"
          alt={t("gilla.altResources")}
          className={styles.projectImage}
        />
      </section>
    </div>
  );
}
