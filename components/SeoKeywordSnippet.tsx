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
        {names}. {userData.title}. Senior Software Engineer, Software Engineer.{" "}
        {userData.location}. Python, FastAPI, Next.js, TypeScript, Ruby on Rails,
        Django, AWS, Docker, PostgreSQL. {skills}.
      </p>
    </section>
  );
}
