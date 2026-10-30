import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import whiteLogo from "../../assets/images/Design/Logo_Personal Logo - White.svg";
import content from "../../data/content";

const navLinks = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "testimonials", href: "/testimonials" },
  { key: "contact", href: "/contact" },
];

const legalLinks = [
  { key: "privacy", href: "/privacy-policy" },
  { key: "terms", href: "/terms" },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d00]";

export default function Footer() {
  const { t, language, lang } = useLanguage();
  const currentLang = language ?? lang ?? "en";

  const { socials, contact } = content;

  const address =
    currentLang === "ar"
      ? contact?.address_ar || contact?.address || ""
      : contact?.address || contact?.address_ar || "";

  return (
    <footer className="relative z-10 isolate w-full overflow-hidden bg-[#111111] px-5 pt-16 sm:px-6 sm:pt-20">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ff4d00]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Logo */}
          <Link
            to="/"
            aria-label={t.nav.logo}
            className={`flex items-center gap-3 rounded-lg ${focusRing}`}
          >
            {/* ✏️ تعديل: ارتفاع متحكم فيه والعرض تلقائي بدل size-36 */}
            <img src={whiteLogo} alt="" className="h-16 w-auto object-contain sm:h-20" />
          </Link>

          {/* Main menu */}
          <nav
            aria-label={t.footer.navigation}
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className={`rounded-full px-4 py-2 text-small text-zinc-300 transition hover:bg-white/5 hover:text-white ${focusRing}`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </nav>

          {/* Address */}
          {address && (
            <address className="flex items-center justify-center gap-2 text-body not-italic text-zinc-300">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-5 shrink-0 fill-none stroke-[#ff4d00] stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <span>
                <span className="sr-only">{t.footer.address}: </span>
                {address}
              </span>
            </address>
          )}

          {/* Social icons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`grid size-11 place-items-center rounded-full border border-white/10 text-zinc-400 transition duration-200 hover:-translate-y-0.5 hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-white ${focusRing}`}
              >
                <svg
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                  className="size-5 fill-current"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col-reverse items-center gap-6 border-t border-white/10 py-8 text-small text-zinc-400 sm:mt-16 md:flex-row md:justify-between">
          <div className="space-y-1 text-center md:text-start">
            <p className="text-body">{t.footer.copyright}</p>

            <p className="text-body">
              {t.footer.credit}{" "}
              <a
                href="mailto:hamotech22@gmail.com"
                className="text-[#ff4d00] transition hover:text-white"
              >
                hamotech.
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className="transition hover:text-white"
              >
                {t.footer[link.key]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}