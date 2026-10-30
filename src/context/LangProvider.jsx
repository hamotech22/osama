import { useLayoutEffect, useMemo, useState } from "react";
import { LangContext } from "./LangContext";
import texts from "../locales/texts";

export default function LangProvider({ children }) {
  const [lang, setLang] = useState(() => (window.localStorage.getItem("hreka-language") === "ar" ? "ar" : "en"));
  const value = useMemo(() => ({ lang, setLang, t: texts[lang] }), [lang]);

  useLayoutEffect(() => {
    window.localStorage.setItem("hreka-language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    const titleSuffix = lang === "ar" ? "تصوير فوتوغرافي" : "Photography";
    document.title = `${texts[lang].nav.logo.trim()} | ${titleSuffix}`;
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
