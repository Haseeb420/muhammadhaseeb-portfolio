import { userData } from "@/data/portfolio";

/**
 * Server-rendered keyword snippet for crawlers that don't run JS.
 * Visually hidden; keeps name variants and key terms in initial HTML.
 */
export function SeoKeywordSnippet() {
  const names = [userData.name, ...(userData.alternateNames ?? [])].join(", ");
  const skills = userData.skills.slice(0, 12).map((s) => s.name).join(", ");

  return (
    <section aria-hidden="true" className="sr-only">
      <p>
        {names}. {userData.title}, Associate Team Lead, Senior Software Engineer.
        {userData.location}. Python, Django, FastAPI, React, Next.js, Ruby on
        Rails. {skills}.
      </p>
    </section>
  );
}
