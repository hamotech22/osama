import { useEffect, useState } from "react";
import useLanguage from "../../context/useLanguage";

export default function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.footer.backToTop}
      className={`fixed bottom-6 right-5 rtl:right-auto rtl:left-5 z-50 grid size-11 place-items-center rounded-full bg-[#FF4D0A] text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:bg-[#e64305] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D0A] sm:bottom-8 sm:right-8 rtl:sm:right-auto rtl:sm:left-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="size-5">
        <path d="M4 12.5 10 6.5l6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
