import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL("/fr", request.url), 308);
}

export const config = {
  matcher: ["/"],
};
