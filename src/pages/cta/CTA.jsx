import useLanguage from "../../context/useLanguage";
import content from "../../data/content";

export default function CTA({ variant = "default" }) {
  const { t } = useLanguage();
  const isServicesCta = variant === "services";
  const whatsapp = String(content.contact.whatsapp ?? "").replace(/\D/g, "");

  const title = isServicesCta ? t.services.ctaTitle : t.cta.title;
  const description = isServicesCta ? t.services.ctaDescription : t.cta.description;
  const action = isServicesCta ? t.services.ctaAction : t.cta.action;
  const whatsappMessage = isServicesCta ? t.services.whatsappMessage : "";
  const href = isServicesCta && whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    : "/contact";
  const sectionPadding = isServicesCta
    ? "px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12"
    : "px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:py-24";
  const cardSize = isServicesCta
    ? "max-w-5xl rounded-2xl px-5 py-8 sm:rounded-3xl sm:px-8 sm:py-10 md:px-10 md:py-12"
    : "max-w-6xl rounded-2xl px-5 py-12 sm:rounded-3xl sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24";

  return (
    <section id="cta" data-motion="fade-up" className={`w-full scroll-mt-24 bg-white ${sectionPadding}`}>
      <div className={`mx-auto ${isServicesCta ? "max-w-5xl" : "max-w-6xl"}`}>
        <div className={`relative isolate overflow-hidden bg-[#ff4d00] shadow-xl shadow-[#ff4d00]/20 ${cardSize}`}>
          {/* Background grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff1f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1f_1px,transparent_1px)] bg-size-[32px_32px] sm:bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />

          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 left-1/2 -z-10 size-48 -translate-x-1/2 rounded-full bg-[#ff7a3d] opacity-70 blur-[70px] sm:-top-24 sm:size-80 sm:blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-16 -z-10 size-48 rounded-full bg-[#e63e00] opacity-70 blur-[70px] sm:-bottom-32 sm:-right-24 sm:size-80 sm:blur-[90px]"
          />

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2
              data-motion="fade-up"
              className="text-balance text-h2 font-semibold leading-tight tracking-tight text-white"
            >
              {title}
            </h2>

            <p
              data-motion="fade-up"
              className="mt-4 max-w-2xl text-pretty text-body leading-6 text-white/90 sm:mt-6 sm:leading-7"
            >
              {description}
            </p>

            <div data-motion="fade-up" className="mt-7 flex w-full max-w-sm flex-col gap-3 sm:mt-9 sm:max-w-md sm:flex-row">
              <a
                href={href}
                target={isServicesCta && whatsapp ? "_blank" : undefined}
                rel={isServicesCta && whatsapp ? "noopener noreferrer" : undefined}
                className="group flex min-h-12 w-full flex-1 items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-small font-semibold text-zinc-950 shadow-lg shadow-black/10 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-14 sm:px-6"
              >
                <span>{action}</span>

                <svg
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                  className="size-4 shrink-0 fill-current transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
