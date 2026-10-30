import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LangContext } from "../../context/LangContext";
import blackLogo from "../../assets/images/Design/Logo_Personal Logo - Black.svg";

const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "testimonials", href: "/testimonials" },
];

const desktopLink =
  "rounded-full px-3.5 py-2 text-small font-medium text-zinc-600 transition hover:bg-zinc-900/5 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D0A]";

const mobileLink = "block rounded-xl px-4 py-3 text-body font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// ✏️ تعديل: لوجو أكبر (موبايل 160×56 / ديسكتوب 208×64) من غير ما يأثر على ارتفاع النافبار
function Logo({ name }) {
  return (
    <Link to="/" onClick={scrollToTop} aria-label={name} className="flex items-center">
      <img
        src={blackLogo}
        alt={name}
        className="h-14 w-40 shrink-0 object-contain md:h-16 md:w-52"
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useContext(LangContext);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="relative mx-auto max-w-6xl">
        <nav
          aria-label={t.nav.mainLabel}
          className="flex h-14 items-center justify-between rounded-full border border-zinc-200/70 bg-white/75 ps-5 pe-2 shadow-lg shadow-zinc-900/5 backdrop-blur-xl"
        >
          <Logo name={t.nav.logo} />

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link key={item.key} to={item.href} onClick={item.key === "home" ? scrollToTop : undefined} className={desktopLink}>
                {t.nav[item.key]}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              dir="ltr"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              aria-label={t.nav.changeLanguage}
              className="relative grid h-9 w-22 grid-cols-2 items-center rounded-full bg-zinc-900/5 p-1 text-small font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D0A]"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-y-1 start-1 w-[calc(50%-4px)] rounded-full bg-zinc-950 shadow-sm transition-transform duration-300 ease-out ${
                  lang === "ar" ? "translate-x-full" : ""
                }`}
              />
              <span
                className={`relative z-10 text-center transition-colors duration-300 ${lang === "en" ? "text-white" : "text-zinc-500"}`}
              >
                EN
              </span>
              <span
                className={`relative z-10 text-center transition-colors duration-300 ${lang === "ar" ? "text-white" : "text-zinc-500"}`}
              >
                AR
              </span>
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((prev) => !prev)}
              className="grid size-10 place-items-center rounded-full text-zinc-700 transition hover:bg-zinc-900/5 md:hidden"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="size-5">
                {open ? (
                  <path d="m5 5 10 10M15 5 5 15" strokeLinecap="round" />
                ) : (
                  <path d="M3.5 6h13M3.5 10h13M3.5 14h13" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full mt-2 origin-top rounded-3xl border border-zinc-200/70 bg-white p-2 shadow-xl shadow-zinc-900/10 transition duration-200 md:hidden ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              onClick={() => {
                close();
                if (item.key === "home") scrollToTop();
              }}
              className={mobileLink}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </div>
      </div>
    
    </header>
  );
}