import { userData } from "@/data/portfolio";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev-muhammadhaseeb.vercel.app";

export function JsonLd() {
  const currentJob = userData.experience[0];
  const education = userData.education[0];
  const skillNames = userData.skills.map((s) => s.name);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: userData.name,
    ...(userData.alternateNames?.length && {
      alternateName: userData.alternateNames,
    }),
    jobTitle: userData.title,
    description: userData.summary,
    url: baseUrl,
    sameAs: [userData.socials.linkedin, userData.socials.github],
    knowsAbout: skillNames,
    ...(currentJob && { worksFor: { "@type": "Organization", name: currentJob.company } }),
    address: { "@type": "PostalAddress", addressLocality: userData.location },
    ...(education && {
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: education.institution,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
