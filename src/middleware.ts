import { defineMiddleware } from "astro:middleware";
import { matches, routes } from "./routes";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const lang = (
    context.request.headers.get("Accept-language")?.split(",")[0] || "en-US"
  ).slice(0, 2);
  const pathname = context.url.pathname;

  console.log("PATHNAME", pathname, "URL", context.request.url);

  if (pathname === "/" || !matches.includes(pathname)) {
    return Response.redirect(`${context.url.origin}/${lang}`, 301);
  }
  // if (!matches.filter((match) => match === pathname)) {
  //   return Response.redirect(`${context.url.origin}/${lang}`, 301);
  // }
  // pathname;
  return response;
});
