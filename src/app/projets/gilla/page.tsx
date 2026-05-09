import Link from "next/link";
import styles from "../../inner-page.module.css";

export default function GillaPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <Link href="/projets" aria-label="Retour aux projets">
          &larr;
        </Link>
        <img
          src="/gilla/01-logo-gilla.png"
          alt="Logo GILLA"
          className={styles.projectLogoOnly}
        />
      </section>

      <section className={styles.card}>
        <h2>CAHIER DES CHARGES :</h2>
        <p className={styles.subtitle}>
          Le projet GILLA vise à créer un site où les membres du lycée peuvent
          signaler des problèmes de toutes sortes pour une prise en charge
          rapide, grâce à un système de gestion centralisée des tickets
          d&apos;incidents avec une affectation automatique au personnel de
          maintenance concerné.
        </p>
      </section>

      <section className={styles.card}>
        <h2>ANALYSE DE L&apos;EXISTANT :</h2>
        <p className={styles.subtitle}>
          La gestion des incidents au lycée était désorganisée, car elle se
          faisait par courriel ou oralement auprès de différents responsables, sans
          centralisation. Cela rendait difficile la gestion efficace des
          incidents en fonction des ressources de maintenance disponibles et des
          expertises nécessaires.
        </p>
      </section>

      <section className={styles.card}>
        <h2>ANALYSE DES BESOINS :</h2>
        <p className={styles.subtitle}>Le site doit :</p>
        <ul className={styles.bullets}>
          <li>Faciliter le signalement d&apos;incidents de tous types au lycée.</li>
          <li>
            Rendre accessible le signalement d&apos;incidents à toute personne
            travaillant au lycée.
          </li>
          <li>
            Centraliser l&apos;enregistrement des incidents et leurs affectations
            au personnel de maintenance.
          </li>
          <li>
            Accélérer la prise en charge des incidents et les opérations de
            maintenance correspondantes.
          </li>
          <li>
            In fine, favoriser une amélioration continue de la qualité des
            infrastructures du lycée.
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>ORGANISATION DU PROJET :</h2>
        <p className={styles.subtitle}>
          I) Le projet GILLA a été décomposé en trois parties :
        </p>
        <ul className={styles.bullets}>
          <li>
            Le site d&apos;administration, avec le développement de la partie
            back-end.
          </li>
          <li>
            Le site public incluant l&apos;accès réservé aux utilisateurs enregistrés
            et le développement de la partie front-end.
          </li>
          <li>Le développement de l&apos;application mobile Android.</li>
        </ul>

        <p className={styles.subtitle}>
          II) Le développement de ce projet s&apos;est fait en suivant le cycle en
          V.
        </p>
        <img
          src="/gilla/02-cycle-v.png"
          alt="Schéma du cycle en V"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>
          III) La réalisation de ce projet a été un travail d&apos;équipe, où chaque
          membre a apporté sa contribution en utilisant le CMS Joomla. Pour
          faciliter la collaboration, nous avons utilisé GitHub.
        </p>
        <img
          src="/gilla/03-github.png"
          alt="Capture GitHub du projet GILLA"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>
          IV) Le site GILLA utilise la conception MVC : Modèle Vue Contrôleur.
        </p>
        <ul className={styles.bullets}>
          <li>
            Le modèle gère la manipulation des données en prenant en charge la
            récupération, la sauvegarde et l&apos;initialisation des données, ainsi
            que la gestion des formulaires associés.
          </li>
          <li>
            La vue est chargée de récupérer les données à partir du modèle et de
            les afficher de manière appropriée dans l&apos;interface utilisateur de
            l&apos;application Joomla, tout en effectuant des opérations
            préliminaires pour préparer le document HTML.
          </li>
          <li>
            Le contrôleur gère les opérations CRUD (créer, lire, mettre à jour,
            supprimer) dans une application Joomla, en prenant en charge la
            gestion des autorisations, des redirections et d&apos;autres
            fonctionnalités liées à la manipulation des données.
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2>CONTRIBUTIONS PERSONNELLES :</h2>
        <p className={styles.subtitle}>
          Avant de commencer la phase de développement, nous avons réparti les
          tâches et commencé à développer le front-end.
        </p>
        <p className={styles.subtitle}>
          J&apos;étais responsable de la vue détail de la prise en charge. Après
          avoir terminé le back-end, je me suis occupé de la vue liste des
          affectations dans le front-end.
        </p>

        <p className={styles.subtitle}>
          Tableau de répartition des tâches pour le back-end :
        </p>
        <img
          src="/gilla/04-repartition-backend.png"
          alt="Répartition des tâches back-end"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>
          Voici à quoi ressemble la vue de détail de la prise en charge dans le
          back-end :
        </p>
        <img
          src="/gilla/05-pec-backend.png"
          alt="Vue détail prise en charge côté back-end"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>
          J&apos;étais chargé d&apos;ajouter différentes lignes dans le formulaire comme
          le commentaire. Initialisation de la ligne commentaire dans le fichier
          XML de prise en charge :
        </p>
        <img
          src="/gilla/06-commentaire-xml.png"
          alt="Initialisation commentaire XML"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>
          Dans le template de prise en charge, dans le fichier edit.php, j&apos;ai
          ajouté les lignes suivantes pour faire apparaître la ligne de
          commentaire :
        </p>
        <img
          src="/gilla/07-edit-php.png"
          alt="Code edit.php commentaire"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>
          Tableau de répartition des tâches pour le front-end :
        </p>
        <img
          src="/gilla/08-repartition-frontend.png"
          alt="Répartition des tâches front-end"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>
          Vue liste des affectations dans le front-end :
        </p>
        <img
          src="/gilla/12-donnees-agent.png"
          alt="Vue des affectations"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>
          Pour le front-end, j&apos;ai également ajouté des lignes de code. Pour
          l&apos;agent, j&apos;ai effectué des requêtes SQL pour récupérer dans la base de
          données le nom et prénom de l&apos;agent pour ensuite les faire apparaître.
        </p>

        <p className={styles.subtitle}>
          Initialisation dans le XML de la colonne agent :
        </p>
        <img
          src="/gilla/13-agent-xml-correct.png"
          alt="Initialisation XML colonne agent"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>
          Requête SQL qui récupère le nom et le prénom de l&apos;agent dans le modèle
          d&apos;affectation :
        </p>
        <img
          src="/gilla/14-sql-correct.png"
          alt="Requête SQL model affectation"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>Affichage de la colonne agent :</p>
        <img
          src="/gilla/15-colonne-correct.png"
          alt="Affichage colonne agent"
          className={styles.projectImage}
        />

        <p className={styles.subtitle}>Affichage des données de la colonne agent :</p>
        <img
          src="/gilla/16-donnees-correct.png"
          alt="Affichage des données colonne agent"
          className={styles.projectImage}
        />
      </section>

      <section className={styles.card}>
        <h2>PHASE DE TEST :</h2>
        <p className={styles.subtitle}>
          Une fois le développement du back-end et du front-end terminés, nous
          avons effectué des fiches de test afin de vérifier que tout était
          conforme.
        </p>
        <img
          src="/gilla/17-test-backend.png"
          alt="Fiche de test back-end"
          className={styles.projectImage}
        />
        <img
          src="/gilla/18-test-frontend.png"
          alt="Fiche de test front-end"
          className={styles.projectImage}
        />
      </section>

      <section className={styles.card}>
        <h2>ANDROID :</h2>
        <p className={styles.subtitle}>
          Pour cette étape, nous étions tous chargés de la même mission qui
          était de créer l&apos;application Android GILLA à l&apos;aide
          d&apos;Android Studio.
        </p>
        <img
          src="/gilla/19-android-emulator.png"
          alt="Application Android GILLA sur émulateur"
          className={styles.androidImage}
        />
        <img
          src="/gilla/20-android-xml.png"
          alt="Code XML Android"
          className={styles.androidImage}
        />
      </section>

      <section className={styles.card}>
        <h2>GÉRER DES SAUVEGARDES :</h2>
        <img
          src="/gilla/21-commits.png"
          alt="Historique des commits"
          className={styles.projectImage}
        />
        <h2>LES MOYENS UTILISÉS :</h2>
        <img
          src="/gilla/22-ressources.png"
          alt="Ressources numériques du projet"
          className={styles.projectImage}
        />
      </section>
    </div>
  );
}
