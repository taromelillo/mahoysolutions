import { i18n } from "./i18n";

enum Languages {
  "English" = "en",
  "Spanish" = "es",
  "Default" = "en",
}

export function getLangFromUrl(url: URL): Languages {
  const lang = url.pathname.split("/")[1];
  return lang === Languages.Spanish ? Languages.Spanish : Languages.Default;
}

export function useTranslation(lang: Languages): MahoyData {
  lang === Languages.Spanish
    ? (lang = Languages.Spanish)
    : (lang = Languages.Default);
  // return function t(key: keyof (typeof i18n)[typeof lang]) {
  //   return i18n[lang][key];
  return i18n[lang];
  // };
}
