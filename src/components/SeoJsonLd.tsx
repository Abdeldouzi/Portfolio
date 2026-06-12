import { SITE_DESCRIPTION, SITE_URL } from "../lib/site";

const LINKEDIN_URL = "https://www.linkedin.com/in/abdel-karim-douzi/";
const GITHUB_URL = "https://github.com/Abdeldouzi";

export function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Abdel-Karim Douzi",
        givenName: "Abdel-Karim",
        familyName: "Douzi",
        jobTitle: "Développeur full stack",
        url: SITE_URL,
        sameAs: [LINKEDIN_URL, GITHUB_URL],
        knowsAbout: [
          "Java",
          "Spring Boot",
          "React",
          "Next.js",
          "TypeScript",
          "MySQL",
          "MongoDB",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Portfolio Abdel-Karim Douzi",
        description: SITE_DESCRIPTION,
        inLanguage: ["fr-FR", "en-US"],
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
