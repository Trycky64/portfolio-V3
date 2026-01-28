import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Next.js 16:
 * - `middleware.ts` is deprecated
 * - use `proxy.ts` instead
 *
 * We currently don't need any rewrites/redirects here, so it's a no-op proxy.
 */
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}
