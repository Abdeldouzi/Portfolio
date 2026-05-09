import styles from "../inner-page.module.css";

export default function ExperiencePage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>Expérience professionnelle</h1>
        <p className={styles.subtitle}>
          Mes expériences en entreprise sur des projets web full stack.
        </p>
      </section>

      <section className={styles.card}>
        <div className={styles.list}>
          <article className={styles.item}>
            <h3>Développeur Web - Stage - Dadi Tech</h3>
            <p className={styles.meta}>Mai 2025 - Juin 2025</p>
            <ul className={styles.bullets}>
              <li>
                Développement full stack d&apos;une plateforme éducative pour le
                système scolaire sénégalais (Java/Spring Boot, React).
              </li>
              <li>
                Conception du back-end : gestion des élèves, enseignants, classes
                et années scolaires via des API REST.
              </li>
              <li>
                Modélisation UML des fonctionnalités avec cas d&apos;utilisation
                admin, enseignant et élève.
              </li>
              <li>
                Intégration de fonctionnalités d&apos;administration (statistiques,
                établissements, niveaux d&apos;étude) côté front-end.
              </li>
              <li>
                Mise en place de la base SQL et persistance des données avec
                Spring Data JPA.
              </li>
            </ul>
          </article>

          <article className={styles.item}>
            <h3>Développeur Web - Stage - EasyFormers</h3>
            <p className={styles.meta}>Déc. 2023 - Fév. 2024</p>
            <ul className={styles.bullets}>
              <li>
                Conception et personnalisation d&apos;un site WordPress (structure,
                design, intégration de contenu).
              </li>
              <li>
                Développement d&apos;un site dynamique HTML/CSS/PHP connecté à une
                base SQL.
              </li>
              <li>
                Implémentation de fonctionnalités d&apos;inscription, connexion,
                messagerie interne et demande de devis.
              </li>
            </ul>
          </article>

          <article className={styles.item}>
            <h3>Développeur Web - Stage - Bois De Chauff 95</h3>
            <p className={styles.meta}>Mai 2023 - Juin 2023</p>
            <ul className={styles.bullets}>
              <li>
                Maintenance corrective et évolutive d&apos;un site e-commerce sous
                PrestaShop.
              </li>
              <li>
                Mise à jour des fiches produits, catégories et paramètres de
                livraison via le back-office.
              </li>
              <li>
                Requêtes SQL directes (MySQL) pour corriger des anomalies de
                données.
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
