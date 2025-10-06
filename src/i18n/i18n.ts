import en from "@/i18n/langs/en/en.json";
import es from "@/i18n/langs/es/es.json";

export const defaultLang = "en";
export const showDefaultLang = true;

export type Translation = typeof en | typeof es;

interface Translations {
  en: Translation;
  es: Translation;
}

export const i18n: Translations = {
  en,
  es,
};
