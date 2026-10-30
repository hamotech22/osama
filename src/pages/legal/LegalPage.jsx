import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";

export default function LegalPage({ type }) {
  const { t } = useLanguage();
  const page = t.legal[type];

  return (
    <main className="w-full bg-white px-5 py-16 sm:py-24 md:px-10">
      <article className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex rounded-md text-small font-medium text-zinc-500 transition hover:text-[#ff4d00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]"
        >
          {t.legal.back}
        </Link>

        <header className="mt-8 border-b border-zinc-200 pb-8 sm:pb-10">
          <h1 className="text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-display font-semibold leading-tight tracking-tight text-transparent">
            {page.title}
          </h1>
          <p className="mt-5 text-body leading-7 text-zinc-600">{page.intro}</p>
        </header>

        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-h3 font-semibold tracking-tight text-zinc-950">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-body leading-7 text-zinc-600">
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul className="mt-3 list-inside list-disc space-y-2 text-body leading-7 text-zinc-600">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
