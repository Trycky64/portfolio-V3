import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If path starts with /en, rewrite to the root path by removing /en prefix.
  // This keeps the canonical route as /projects/:slug while supporting /en/* for locales.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const target = pathname.replace(/^\/en/, "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/en/:path*"],
};
