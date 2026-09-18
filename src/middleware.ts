import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale || pathname.startsWith("/studio")) {
    return NextResponse.next();
  }

  // Always default to `defaultLocale`, never guess from Accept-Language —
  // this is a local PL business site, not a language-detection product.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images/|sitemap.xml|robots.txt|llms.txt).*)",
  ],
};
