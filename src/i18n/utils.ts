import { i18n, type Translation } from "./i18n";

enum Languages {
  "English" = "en",
  "Spanish" = "es",
  "Default" = "en",
}

export function getLangFromUrl(url: URL): Languages {
  const lang = url.pathname.split("/")[1];
  return lang === Languages.Spanish ? Languages.Spanish : Languages.Default;
}

export function useTranslation(lang: Languages): Translation {
  lang === Languages.Spanish
    ? (lang = Languages.Spanish)
    : (lang = Languages.Default);
  return i18n[lang];
}
