import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const host = request.headers.get("host") || "";

    // Skip localhost
    if (
        host.startsWith("localhost") ||
        host.startsWith("127.0.0.1")
    ) {
        return NextResponse.next();
    }

    // Redirect non-www to www
    if (!host.startsWith("www.")) {
        const url = request.nextUrl.clone();
        url.host = `www.${host}`;
        url.protocol = "https:";

        return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all page routes except:
         * - api
         * - _next
         * - static files
         */
        "/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
    ],
};