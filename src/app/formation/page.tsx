"use client";

import { useLocale } from "../../context/LocaleContext";
import { Timeline, type TimelineItem } from "../../components/Timeline/Timeline";
import innerStyles from "../inner-page.module.css";

export default function FormationPage() {
  const { t, locale } = useLocale();

  const timelineItems: TimelineItem[] = [
    {
      id: "m1",
      title: t("formation.m1"),
      subtitle: "ITIC Paris",
      date: t("formation.m1dates"),
      type: "education",
      level: "master",
      badge: t("formation.badgeUpcoming"),
      logo: "/formation/itic.png",
      logoAlt: `${t("formation.logoAlt")} ITIC Paris`,
    },
    {
      id: "cda",
      title: t("formation.cda"),
      subtitle: locale === "fr" ? "Doranco, Bagnolet" : "Doranco, Bagnolet",
      date: t("formation.cdadates"),
      type: "education",
      level: "bac3",
      logo: "/formation/doranco.png",
      logoAlt: `${t("formation.logoAlt")} Doranco`,
    },
    {
      id: "bts",
      title: t("formation.bts"),
      subtitle: locale === "fr" ? "Lycée Louis Armand, Paris 15" : "Lycée Louis Armand, Paris 15",
      date: t("formation.btsdates"),
      type: "education",
      level: "bts",
      logo: "/formation/louis-armand.png",
      logoAlt: `${t("formation.logoAlt")} Lycée Louis Armand`,
    },
    {
      id: "bac",
      title: t("formation.bac"),
      subtitle: locale === "fr" ? "Lycée Van Gogh, Ermont" : "Lycée Van Gogh, Ermont",
      date: t("formation.bacdates"),
      type: "education",
      level: "bac",
      logo: "/formation/van-gogh.png",
      logoAlt: `${t("formation.logoAlt")} Lycée Van Gogh`,
    },
  ];

  return (
    <div className={innerStyles.wrapper}>
      <section className={innerStyles.card}>
        <h1 className={innerStyles.title}>{t("formation.title")}</h1>
        <p className={innerStyles.subtitle}>{t("formation.subtitle")}</p>
      </section>

      <section className={innerStyles.card}>
        <Timeline items={timelineItems} animated />
      </section>
    </div>
  );
}
