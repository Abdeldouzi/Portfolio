export type Locale = "fr" | "en";

const fr = {
  nav: {
    home: "Accueil",
    formation: "Formation",
    experience: "Expérience",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
  },
  header: {
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    mainNav: "Menu principal",
    themeLight: "Activer le mode clair",
    themeDark: "Activer le mode sombre",
    langLabel: "Langue",
    langChoose: "Choisir la langue",
  },
  footer: {
    social: "Réseaux sociaux",
    linkedinAria: "Profil LinkedIn (ouvre dans un nouvel onglet)",
    githubAria: "Profil GitHub (ouvre dans un nouvel onglet)",
  },
  home: {
    hero1: "Développeur Full Stack",
    hero2: "À la recherche d'une alternance",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    introTitle: "Qui suis-je ?",
    intro1:
      "Bonjour, je m'appelle **Abdel-Karim Douzi**. **Développeur web full stack**, je conçois des applications web complètes, du **back-end** au **front-end**, avec un fort intérêt pour les architectures performantes et modulaires.",
    intro2:
      "Je suis à la recherche d'une alternance en tant que **développeur full stack** pour **septembre 2026**. Mon objectif est de rejoindre une équipe dynamique où je pourrai participer à des projets web concrets tout en renforçant mes compétences en développement et en expérience utilisateur. J'ai développé des applications en **Java**, **JavaScript**, **React** et **Next.js**, avec une expérience sur des applications web, des API REST et des interfaces utilisateur. J'aime travailler sur des solutions fiables, maintenables et orientées utilisateur. Je suis motivé par l'apprentissage continu et je souhaite évoluer dans un environnement stimulant, en contribuant à des produits numériques de qualité et en approfondissant mes compétences en développement full stack.",
  },
  formation: {
    title: "Formation",
    subtitle: "Mon parcours scolaire et académique.",
    m1: "Master Expert Lead Développeur Full Stack - ITIC Paris",
    m1dates: "Sept. 2026 - Sept. 2028",
    cda: "Bac +3 Concepteur Développeur d'Applications - Doranco, Bagnolet",
    cdadates: "Oct. 2024 - Juil. 2025",
    bts: "BTS Services Informatiques aux Organisations (SIO) - Lycée Louis Armand, Paris 15",
    btsdates: "Sept. 2022 - Juin 2024",
    bac: "Baccalauréat Général - Maths & Sciences Économiques - Lycée Van Gogh, Ermont",
    bacdates: "Sept. 2019 - Juin 2022",
  },
  experience: {
    title: "Expérience professionnelle",
    subtitle: "Mes expériences en entreprise sur des projets web full stack.",
    dadiTitle: "Développeur Web - Stage - Dadi Tech",
    dadiDates: "Mai 2025 - Juin 2025",
    dadi1:
      "Développement **full stack** d'une plateforme éducative pour le système scolaire sénégalais (**Java**, **Spring Boot**, **React**).",
    dadi2:
      "Conception du **back-end** : gestion des élèves, enseignants, classes et années scolaires via des **API REST**.",
    dadi3:
      "**Modélisation UML** des fonctionnalités avec **cas d'utilisation** admin, enseignant et élève.",
    dadi4:
      "Intégration de fonctionnalités d'administration (statistiques, établissements, niveaux d'étude) côté **front-end**.",
    dadi5:
      "Mise en place de la base **SQL** et persistance des données avec **Spring Data JPA**.",
    easyTitle: "Développeur Web - Stage - EasyFormers",
    easyDates: "Déc. 2023 - Fév. 2024",
    easy1:
      "Conception et personnalisation d'un site **WordPress** (structure, design, intégration de contenu).",
    easy2:
      "Développement d'un site dynamique **HTML** / **CSS** / **PHP** connecté à une base **SQL**.",
    easy3:
      "Implémentation de fonctionnalités d'**inscription**, **connexion**, **messagerie interne** et **demande de devis**.",
    boisTitle: "Développeur Web - Stage - Bois De Chauff 95",
    boisDates: "Mai 2023 - Juin 2023",
    bois1:
      "Maintenance corrective et évolutive d'un site **e-commerce** sous **PrestaShop**.",
    bois2:
      "Mise à jour des fiches produits, catégories et paramètres de livraison via le **back-office**.",
    bois3:
      "Requêtes **SQL** directes (**MySQL**) pour corriger des anomalies de données.",
  },
  skills: {
    title: "Compétences",
    subtitle: "Ma stack technique et mes outils.",
    languages: "Langages",
    frameworks: "Frameworks et bibliothèques",
    databases: "Bases de données",
    tools: "Outils & DevOps",
    cms: "CMS & Design",
  },
  contact: {
    title: "Contact",
    subtitle:
      "Je suis actuellement à la recherche d'une alternance en tant que développeur full stack.",
    sectionAria: "Coordonnées et localisation",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    mapTitle: "Carte — Sannois, Val-d'Oise",
    mapCaption: "Basé à **Sannois** (Val-d'Oise, 95)",
  },
  projects: {
    title: "Projets",
    subtitle: "Sélection de mes projets les plus représentatifs.",
    logoAlt: "Logo",
    backAria: "Retour aux projets",
  },
  riad: {
    alt: "Riad Al Badun",
    lead:
      "**Application web de réservation** pour un riad au **Maroc**, conçue de l'analyse du besoin jusqu'à la **mise en production**.",
    download: "Télécharger le dossier complet (**Word**)",
    ctx: "Contexte et objectif",
    ctxBody:
      "Le projet répond à un besoin de **numérisation** des réservations d'un établissement touristique. L'objectif est d'**automatiser** la gestion des chambres, de sécuriser les **paiements en ligne** et d'offrir une expérience utilisateur fluide sur **mobile** et **desktop**.",
    features: "Fonctionnalités principales",
    f1: "**Inscription** et **authentification** sécurisée avec **JWT**.",
    f2: "Consultation des chambres avec disponibilités en **temps réel**.",
    f3: "**Réservation en ligne** avec sélection de dates.",
    f4: "Paiement en ligne sécurisé avec **Stripe**.",
    f5: "**Espace administrateur** pour chambres, réservations et utilisateurs.",
    f6: "**Annulations**, **remboursements** et gestion des **avis** clients.",
    stack: "Stack technique",
    s1: "**Front-end** : **Next.js**, **React**, **TypeScript**.",
    s2: "**Back-end** : **Java**, **Spring Boot**, **Spring Security**, **JavaMail**.",
    s3: "Base relationnelle : **MySQL** (**Spring Data JPA** / **Hibernate**).",
    s4: "**NoSQL** : **MongoDB** (statistiques de réservation).",
    s5: "**Outils** : **Docker**, **GitHub**, **Postman**, **Trello**, **Figma**.",
    arch: "Architecture et conception",
    a1: "Architecture **MVC** et approche **3-tiers**.",
    a2: "**Modélisation UML** : cas d'utilisation, séquences, activités.",
    a3: "Conception BDD avec **Merise** : **MCD**, **MLD**, **MPD**.",
    a4: "Interface **responsive** avec attention portée à la lisibilité et à l'ergonomie.",
    sec: "Sécurité, tests et DevOps",
    sec1: "Mots de passe hachés avec **BCrypt** et gestion des **rôles**.",
    sec2: "Protection contre **SQLi** / **XSS** et logique **JWT** stateless.",
    sec3: "Tests back-end avec **JUnit** / **Mockito** et tests d'API avec **Postman**.",
    sec4:
      "Couverture de tests annoncée autour de **82-83%** sur des couches critiques.",
    sec5: "Déploiement local via **Docker Compose** et mise en ligne via **Render**.",
  },
  gilla: {
    logoAlt: "Logo GILLA",
    cdcTitle: "CAHIER DES CHARGES :",
    cdcBody:
      "Le projet **GILLA** vise à créer un site où les membres du lycée peuvent signaler des problèmes de toutes sortes pour une **prise en charge** rapide, grâce à un système de gestion centralisée des **tickets d'incidents** avec une affectation automatique au personnel de **maintenance** concerné.",
    existingTitle: "ANALYSE DE L'EXISTANT :",
    existingBody:
      "La gestion des incidents au lycée était désorganisée, car elle se faisait par **courriel** ou oralement auprès de différents responsables, sans **centralisation**. Cela rendait difficile la gestion efficace des incidents en fonction des ressources de **maintenance** disponibles et des **expertises** nécessaires.",
    needsTitle: "ANALYSE DES BESOINS :",
    needsIntro: "**Le site** doit :",
    needs1: "Faciliter le **signalement d'incidents** de tous types au lycée.",
    needs2:
      "Rendre accessible le **signalement d'incidents** à toute personne travaillant au lycée.",
    needs3:
      "**Centraliser** l'enregistrement des incidents et leurs **affectations** au personnel de maintenance.",
    needs4:
      "**Accélérer** la **prise en charge** des incidents et les opérations de **maintenance** correspondantes.",
    needs5:
      "À terme, favoriser une **amélioration continue** de la qualité des **infrastructures** du lycée.",
    orgTitle: "ORGANISATION DU PROJET :",
    org1Intro: "I) Le projet **GILLA** a été décomposé en **trois parties** :",
    org11:
      "Le **site d'administration**, avec le développement de la partie **back-end**.",
    org12:
      "Le **site public** incluant l'accès réservé aux utilisateurs enregistrés et le développement de la partie **front-end**.",
    org13: "Le développement de l'**application mobile Android**.",
    org2: "II) Le développement de ce projet s'est fait en suivant le **cycle en V**.",
    altCycleV: "Schéma du cycle en V",
    org3:
      "III) La réalisation de ce projet a été un travail d'**équipe**, où chaque membre a apporté sa contribution en utilisant le CMS **Joomla**. Pour faciliter la collaboration, nous avons utilisé **GitHub**.",
    altGithub: "Capture GitHub du projet GILLA",
    org4: "IV) Le site **GILLA** utilise la conception **MVC** : **Modèle**, **Vue**, **Contrôleur**.",
    mvc1:
      "Le **modèle** gère la manipulation des **données** en prenant en charge la récupération, la sauvegarde et l'initialisation des données, ainsi que la gestion des **formulaires** associés.",
    mvc2:
      "La **vue** est chargée de récupérer les données à partir du modèle et de les afficher dans l'**interface utilisateur** de l'application **Joomla**, tout en effectuant des opérations préliminaires pour préparer le document **HTML**.",
    mvc3:
      "Le **contrôleur** gère les opérations **CRUD** (créer, lire, mettre à jour, supprimer) dans une application **Joomla**, en prenant en charge la gestion des **autorisations**, des **redirections** et d'autres fonctionnalités liées à la manipulation des données.",
    contribTitle: "CONTRIBUTIONS PERSONNELLES :",
    contrib1:
      "Avant de commencer la phase de **développement**, nous avons réparti les tâches et commencé à développer le **front-end**.",
    contrib2:
      "J'étais responsable de la **vue détail** de la **prise en charge**. Après avoir terminé le **back-end**, je me suis occupé de la **vue liste des affectations** dans le **front-end**.",
    contrib3: "**Tableau de répartition** des tâches pour le **back-end** :",
    altSplitBe: "Répartition des tâches back-end",
    contrib4:
      "Voici à quoi ressemble la **vue détail** de la **prise en charge** dans le **back-end** :",
    altPecBe: "Vue détail prise en charge côté back-end",
    contrib5:
      "J'étais chargé d'ajouter différentes lignes dans le **formulaire** comme le **commentaire**. **Initialisation** de la ligne commentaire dans le fichier **XML** de prise en charge :",
    altXmlComment: "Initialisation commentaire XML",
    contrib6:
      "Dans le **template** de prise en charge, dans le fichier **edit.php**, j'ai ajouté les lignes suivantes pour faire apparaître la ligne de **commentaire** :",
    altEditPhp: "Code edit.php commentaire",
    contrib7: "**Tableau de répartition** des tâches pour le **front-end** :",
    altSplitFe: "Répartition des tâches front-end",
    contrib8: "**Vue liste** des **affectations** dans le **front-end** :",
    altAssignments: "Vue des affectations",
    contrib9:
      "Pour le **front-end**, j'ai également ajouté des lignes de code. Pour l'**agent**, j'ai effectué des **requêtes SQL** pour récupérer dans la **base de données** le nom et prénom de l'agent pour ensuite les faire apparaître.",
    contrib10: "**Initialisation** dans le **XML** de la colonne **agent** :",
    altAgentXml: "Initialisation XML colonne agent",
    contrib11:
      "**Requête SQL** qui récupère le nom et le prénom de l'agent dans le **modèle d'affectation** :",
    altSqlAssign: "Requête SQL model affectation",
    contrib12: "**Affichage** de la colonne **agent** :",
    altAgentCol: "Affichage colonne agent",
    contrib13: "**Affichage** des **données** de la colonne agent :",
    altAgentData: "Affichage des données colonne agent",
    testTitle: "PHASE DE TEST :",
    testBody:
      "Une fois le développement du **back-end** et du **front-end** terminés, nous avons effectué des **fiches de test** afin de vérifier que tout était conforme.",
    altTestBe: "Fiche de test back-end",
    altTestFe: "Fiche de test front-end",
    androidTitle: "ANDROID :",
    androidBody:
      "Pour cette étape, nous étions tous chargés de la même mission : créer l'**application Android GILLA** à l'aide d'**Android Studio**.",
    altAndroidEmu: "Application Android GILLA sur émulateur",
    altAndroidXml: "Code XML Android",
    backupsTitle: "GÉRER DES SAUVEGARDES :",
    altCommits: "Historique des commits",
    meansTitle: "LES MOYENS UTILISÉS :",
    altResources: "Ressources numériques du projet",
  },
  blog: {
    title: "Blog",
  },
};

const en = {
  nav: {
    home: "Home",
    formation: "Education",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  header: {
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mainNav: "Main navigation",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
    langLabel: "Language",
    langChoose: "Choose language",
  },
  footer: {
    social: "Social links",
    linkedinAria: "LinkedIn profile (opens in a new tab)",
    githubAria: "GitHub profile (opens in a new tab)",
  },
  home: {
    hero1: "Full Stack Developer",
    hero2: "Looking for a work-study program",
    ctaProjects: "View my projects",
    ctaContact: "Contact me",
    introTitle: "About me",
    intro1:
      "Hello, I'm **Abdel-Karim Douzi**. A **full stack web developer**, I build complete web applications from **back-end** to **front-end**, with a strong interest in performant, modular architectures.",
    intro2:
      "I'm looking for a **full stack developer** apprenticeship starting **September 2026**. I want to join a dynamic team, work on real web projects and grow my skills in development and user experience. I've built apps with **Java**, **JavaScript**, **React** and **Next.js**, with experience in web apps, REST APIs and user interfaces. I like reliable, maintainable, user-centred solutions. I'm driven by continuous learning and want to contribute to quality digital products while deepening my **full stack** skills.",
  },
  formation: {
    title: "Education",
    subtitle: "My academic path.",
    m1: "Master Expert Lead Full Stack Developer - ITIC Paris",
    m1dates: "Sept. 2026 - Sept. 2028",
    cda: "Bachelor +3 Application Developer & Designer - Doranco, Bagnolet",
    cdadates: "Oct. 2024 - Jul. 2025",
    bts:
      "BTS IT Services for Organisations (SIO) - Louis Armand high school, Paris 15",
    btsdates: "Sept. 2022 - Jun. 2024",
    bac: "General Baccalaureate - Maths & Economics - Van Gogh high school, Ermont",
    bacdates: "Sept. 2019 - Jun. 2022",
  },
  experience: {
    title: "Work experience",
    subtitle: "My internships and roles on full stack web projects.",
    dadiTitle: "Web Developer - Internship - Dadi Tech",
    dadiDates: "May 2025 - Jun. 2025",
    dadi1:
      "**Full stack** development of an educational platform for the Senegalese school system (**Java**, **Spring Boot**, **React**).",
    dadi2:
      "**Back-end** design: managing students, teachers, classes and school years via **REST APIs**.",
    dadi3:
      "**UML modelling** of features with **use cases** for admin, teacher and student.",
    dadi4:
      "Integration of administration features (statistics, establishments, study levels) on the **front-end**.",
    dadi5:
      "**SQL** database setup and data persistence with **Spring Data JPA**.",
    easyTitle: "Web Developer - Internship - EasyFormers",
    easyDates: "Dec. 2023 - Feb. 2024",
    easy1:
      "Design and customization of a **WordPress** site (structure, design, content integration).",
    easy2:
      "Development of a dynamic **HTML** / **CSS** / **PHP** site connected to a **SQL** database.",
    easy3:
      "Implementation of **sign-up**, **login**, **internal messaging** and **quote request** features.",
    boisTitle: "Web Developer - Internship - Bois De Chauff 95",
    boisDates: "May 2023 - Jun. 2023",
    bois1:
      "Corrective and evolutionary maintenance of an **e-commerce** site on **PrestaShop**.",
    bois2:
      "Updating product sheets, categories and delivery settings via the **back-office**.",
    bois3:
      "Direct **SQL** queries (**MySQL**) to fix data anomalies.",
  },
  skills: {
    title: "Skills",
    subtitle: "My technical stack and tools.",
    languages: "Languages",
    frameworks: "Frameworks & libraries",
    databases: "Databases",
    tools: "Tools & DevOps",
    cms: "CMS & design",
  },
  contact: {
    title: "Contact",
    subtitle:
      "I'm currently looking for a full stack developer apprenticeship.",
    sectionAria: "Details and location",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    mapTitle: "Map — Sannois, Val-d'Oise",
    mapCaption: "Based in **Sannois** (Val-d'Oise, 95)",
  },
  projects: {
    title: "Projects",
    subtitle: "A selection of my most representative projects.",
    logoAlt: "Logo",
    backAria: "Back to projects",
  },
  riad: {
    alt: "Riad Al Badun",
    lead:
      "**Web booking app** for a riad in **Morocco**, from requirements analysis to **production**.",
    download: "Download full project dossier (**Word**)",
    ctx: "Context & goals",
    ctxBody:
      "The project meets a need to **digitise** bookings for a tourism business. The goal is to **automate** room management, secure **online payments** and offer a smooth **UX** on **mobile** and **desktop**.",
    features: "Main features",
    f1: "Secure **sign-up** and **authentication** with **JWT**.",
    f2: "Room browsing with **real-time** availability.",
    f3: "**Online booking** with date selection.",
    f4: "Secure online payment with **Stripe**.",
    f5: "**Admin** area for rooms, bookings and users.",
    f6: "**Cancellations**, **refunds** and **customer reviews**.",
    stack: "Tech stack",
    s1: "**Front-end**: **Next.js**, **React**, **TypeScript**.",
    s2: "**Back-end**: **Java**, **Spring Boot**, **Spring Security**, **JavaMail**.",
    s3: "Relational DB: **MySQL** (**Spring Data JPA** / **Hibernate**).",
    s4: "**NoSQL**: **MongoDB** (booking statistics).",
    s5: "**Tools**: **Docker**, **GitHub**, **Postman**, **Trello**, **Figma**.",
    arch: "Architecture & design",
    a1: "**MVC** architecture and **3-tier** approach.",
    a2: "**UML modelling**: use cases, sequences, activities.",
    a3: "Database design with **Merise**: **MCD**, **MLD**, **MPD**.",
    a4: "**Responsive** UI focused on readability and ergonomics.",
    sec: "Security, testing & DevOps",
    sec1: "Password hashing with **BCrypt** and **role** management.",
    sec2: "Protection against **SQLi** / **XSS** and stateless **JWT** logic.",
    sec3: "**Back-end** tests with **JUnit** / **Mockito** and API tests with **Postman**.",
    sec4:
      "Reported test coverage around **82-83%** on critical layers.",
    sec5: "Local deployment with **Docker Compose** and hosting on **Render**.",
  },
  gilla: {
    logoAlt: "GILLA logo",
    cdcTitle: "SPECIFICATIONS:",
    cdcBody:
      "The **GILLA** project aims to build a site where high school staff can report all kinds of issues for fast **resolution**, using a centralised **incident ticket** system that automatically assigns work to the relevant **maintenance** staff.",
    existingTitle: "AS-IS ANALYSIS:",
    existingBody:
      "Incident management at the school was disorganised: reports went by **email** or verbally to different contacts with no **central tracking**. That made it hard to handle incidents efficiently given available **maintenance** resources and required **expertise**.",
    needsTitle: "REQUIREMENTS ANALYSIS:",
    needsIntro: "**The site** must:",
    needs1: "Make it easy to **report** any type of **incident** at the school.",
    needs2: "Make **incident reporting** available to everyone working on site.",
    needs3: "**Centralise** incident records and **assignments** to maintenance staff.",
    needs4: "**Speed up** **incident handling** and the related **maintenance** work.",
    needs5:
      "Ultimately support **continuous improvement** of the school's **facilities**.",
    orgTitle: "PROJECT ORGANISATION:",
    org1Intro: "I) The **GILLA** project was split into **three parts**:",
    org11: "The **admin site**, including **back-end** development.",
    org12:
      "The **public site** with access for registered users and **front-end** development.",
    org13: "Development of the **Android** mobile app.",
    org2: "II) The project followed the **V-model** lifecycle.",
    altCycleV: "V-model diagram",
    org3:
      "III) Delivery was **teamwork**: everyone contributed using the **Joomla** CMS. We used **GitHub** to collaborate.",
    altGithub: "GitHub screenshot of the GILLA project",
    org4: "IV) **GILLA** follows **MVC** design: **Model**, **View**, **Controller**.",
    mvc1:
      "The **model** handles **data** operations—fetching, saving and initialising data—and manages the related **forms**.",
    mvc2:
      "The **view** retrieves data from the model and renders it in the **Joomla** UI, performing preliminary steps to prepare the **HTML** output.",
    mvc3:
      "The **controller** handles **CRUD** (create, read, update, delete) in the **Joomla** app, including **permissions**, **redirects** and other logic tied to data updates.",
    contribTitle: "MY CONTRIBUTIONS:",
    contrib1:
      "Before **development**, we split the work and started building the **front end**.",
    contrib2:
      "I owned the **back-office detail view** for work orders (**prise en charge**). After the **back end** was done, I implemented the **assignment list view** in the **front end**.",
    contrib3: "**Task breakdown** chart for the **back end**:",
    altSplitBe: "Back-end task allocation chart",
    contrib4: "What the **maintenance detail view** looked like in the **back end**:",
    altPecBe: "Maintenance detail view in the back office",
    contrib5:
      "I added several **form** fields including a **comment** line. **Initialising** the comment row in the maintenance **XML** file:",
    altXmlComment: "Comment field initialisation in XML",
    contrib6:
      "In the maintenance **template**'s **edit.php** file, I added the following lines to surface the **comment** row:",
    altEditPhp: "edit.php snippet for the comment row",
    contrib7: "**Task breakdown** chart for the **front end**:",
    altSplitFe: "Front-end task allocation chart",
    contrib8: "**Assignment list view** in the **front end**:",
    altAssignments: "Assignment list screenshot",
    contrib9:
      "On the **front end** I added more code. For the assigned **agent**, I wrote **SQL** queries to fetch first and last names from the **database** and display them.",
    contrib10: "**Agent** column **initialisation** in **XML**:",
    altAgentXml: "XML setup for the agent column",
    contrib11:
      "**SQL query** fetching the agent's first and last name in the **assignment model**:",
    altSqlAssign: "SQL query in the assignment model",
    contrib12: "**Rendering** the **agent** column:",
    altAgentCol: "Agent column in the UI",
    contrib13: "**Rendering** the agent column **data**:",
    altAgentData: "Agent column data in the UI",
    testTitle: "TESTING PHASE:",
    testBody:
      "After **back-end** and **front-end** development, we ran **test scripts** to verify everything met the requirements.",
    altTestBe: "Back-end test sheet",
    altTestFe: "Front-end test sheet",
    androidTitle: "ANDROID:",
    androidBody:
      "In this phase everyone had the same goal: build the **GILLA Android** app with **Android Studio**.",
    altAndroidEmu: "GILLA Android app on emulator",
    altAndroidXml: "Android XML layout code",
    backupsTitle: "MANAGING BACKUPS:",
    altCommits: "Commit history",
    meansTitle: "RESOURCES USED:",
    altResources: "Project digital resources",
  },
  blog: {
    title: "Blog",
  },
};

export const dictionaries: Record<Locale, Record<string, unknown>> = {
  fr: fr as unknown as Record<string, unknown>,
  en: en as unknown as Record<string, unknown>,
};
