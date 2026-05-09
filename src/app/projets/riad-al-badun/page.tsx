import Link from "next/link";
import styles from "../../inner-page.module.css";

export default function RiadAlBadunPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <Link href="/projets" aria-label="Retour aux projets">
          &larr;
        </Link>
        <img
          src="/riad-al-badun/logo.png"
          alt="Riad Al Badun"
          className={styles.projectLogoOnly}
        />
        <p className={styles.subtitle}>
          Application web de réservation pour un riad au Maroc, conçue de
          l&apos;analyse du besoin jusqu&apos;à la mise en production.
        </p>
        <a
          href="/docs/Dossier-de-projet-Riad-Al-Badun.docx"
          download
          className={styles.downloadLink}
        >
          Télécharger le dossier complet (Word)
        </a>
      </section>

      <section className={styles.card}>
        <h2>Contexte et objectif</h2>
        <p className={styles.subtitle}>
          Le projet répond à un besoin de numérisation des réservations d&apos;un
          établissement touristique. L&apos;objectif est d&apos;automatiser la gestion
          des chambres, de sécuriser les paiements en ligne et d&apos;offrir une
          expérience utilisateur fluide sur mobile et desktop.
        </p>
      </section>

      <section className={styles.card}>
        <h2>Fonctionnalités principales</h2>
        <ul className={styles.bullets}>
          <li>Inscription et authentification sécurisée avec JWT.</li>
          <li>Consultation des chambres avec disponibilités en temps réel.</li>
          <li>Réservation en ligne avec sélection de dates.</li>
          <li>Paiement en ligne sécurisé avec Stripe.</li>
          <li>Espace administrateur pour chambres, réservations et utilisateurs.</li>
          <li>Annulations, remboursements et gestion des avis clients.</li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>Stack technique</h2>
        <ul className={styles.bullets}>
          <li>Front-end : Next.js, React, TypeScript.</li>
          <li>Back-end : Java, Spring Boot, Spring Security, JavaMail.</li>
          <li>Base relationnelle : MySQL (Spring Data JPA/Hibernate).</li>
          <li>Base NoSQL : MongoDB (statistiques de réservation).</li>
          <li>Outils : Docker, GitHub, Postman, Trello, Figma.</li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>Architecture et conception</h2>
        <ul className={styles.bullets}>
          <li>Architecture MVC et approche 3-tiers.</li>
          <li>Modélisation UML : cas d&apos;utilisation, séquences, activités.</li>
          <li>Conception BDD avec Merise : MCD, MLD, MPD.</li>
          <li>
            Interface responsive avec attention portée à la lisibilité et à
            l&apos;ergonomie.
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>Sécurité, tests et DevOps</h2>
        <ul className={styles.bullets}>
          <li>Mots de passe hachés avec BCrypt et gestion des rôles.</li>
          <li>Protection contre SQLi/XSS et logique JWT stateless.</li>
          <li>Tests back-end avec JUnit/Mockito et tests d&apos;API avec Postman.</li>
          <li>
            Couverture de tests annoncée autour de 82-83% sur des couches
            critiques.
          </li>
          <li>
            Déploiement local via Docker Compose et mise en ligne via Render.
          </li>
        </ul>
      </section>
    </div>
  );
}
