export const defaultLang = "en";
export const showDefaultLang = true;

interface Translations {
  en: MahoyData;
  es: MahoyData;
}

export const i18n: Translations = {
  en: await import("./langs/en/en.json"),
  es: await import("./langs/es/es.json"),
};
