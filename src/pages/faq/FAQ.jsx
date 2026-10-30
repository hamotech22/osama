import useLanguage from "../../context/useLanguage";
import content from "../../data/content";

export default function FAQ() {
  const { t } = useLanguage();
  const { email, whatsapp } = content.contact;
  const whatsappHref = `https://wa.me/${String(whatsapp ?? "").replace(/\D/g, "")}`;
  const emailHref = email ? `mailto:${email}` : undefined;

  return (
    <section id="faq" data-motion="fade-up" className="scroll-mt-24 bg-zinc-100 px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:gap-14">
          {/* FAQ */}
          <div className="min-w-0">
            <h2 className="max-w-3xl bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-h2 font-semibold leading-tight tracking-tight text-transparent">
              {t.faq.title}
            </h2>

            <p className="mt-4 text-body leading-6 text-zinc-600 sm:mt-5 sm:leading-7">{t.faq.description}</p>

            <div className="mt-7 space-y-3 sm:mt-10 sm:space-y-4">
              {t.faq.questions.map(([question, answer]) => (
                <details
                  key={question}
                  className="group rounded-xl bg-white ring-1 ring-zinc-900/5 transition duration-300 open:shadow-lg open:shadow-zinc-900/5 sm:rounded-2xl"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d00] sm:gap-5 sm:rounded-2xl sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0 text-body font-medium leading-6 text-zinc-950">{question}</span>

                    <span
                      aria-hidden="true"
                      className="relative grid size-8 shrink-0 place-items-center rounded-full bg-zinc-100 text-zinc-600 transition duration-300 group-open:bg-[#ff4d00] group-open:text-white sm:size-9"
                    >
                      <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
                      <span className="absolute h-3.5 w-0.5 rounded-full bg-current transition duration-300 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>

                  <div className="max-w-2xl px-4 pb-5 text-body leading-6 text-zinc-600 sm:px-6 sm:pb-6 sm:leading-7">
                    {answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Contact card */}
          <div
            data-motion="fade-up"
            className="relative isolate flex min-h-[400px] flex-col overflow-hidden rounded-2xl bg-[#ff4d00] p-6 shadow-xl shadow-[#ff4d00]/20 ring-1 ring-inset ring-white/15 sm:min-h-[420px] sm:rounded-3xl sm:p-8 md:p-10 lg:sticky lg:top-28"
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 -z-10 size-56 rounded-full bg-[#ff7a3d] opacity-60 blur-[70px] sm:-bottom-20 sm:-right-20 sm:size-72 sm:blur-[80px]"
            />

            <img
              src="https://framerusercontent.com/images/zDh1xqaj7U8pkQhnvX2mpMNDBo.webp"
              alt=""
              loading="lazy"
              className="size-20 shrink-0 rounded-full object-cover grayscale ring-4 ring-white/30 sm:size-24"
            />

            <div className="mt-5 sm:mt-6">
              <h3 className="text-balance text-h3 font-semibold leading-tight tracking-tight text-white">
                {t.faq.consultationTitle}
              </h3>

              <p className="mt-3 max-w-md text-body leading-6 text-white/90 sm:mt-4 sm:leading-7">{t.faq.emailPrompt}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-auto sm:pt-10">
              {/* WhatsApp */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-center text-small font-semibold text-zinc-950 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-14"
              >
                <span>{t.faq.consultation}</span>

                <svg
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                  className="size-4 shrink-0 fill-current transition duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                >
                  <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={emailHref}
                className="flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-zinc-950 px-5 py-3 text-center text-small font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-14"
              >
                <span>{t.faq.email}</span>

                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px] shrink-0">
                  <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
