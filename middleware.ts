import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const hostname = request.nextUrl.hostname;

    if (
        hostname === "localhost" ||
        hostname === "127.0.0.1"
    ) {
        return NextResponse.next();
    }

    if (!hostname.startsWith("www.")) {
        const url = request.nextUrl.clone();
        url.hostname = `www.${hostname}`;

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