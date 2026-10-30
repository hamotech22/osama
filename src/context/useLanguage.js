import { useContext } from "react";
import { LangContext } from "./LangContext";

export default function useLanguage() {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLanguage must be used within LangProvider");
  return context;
}
