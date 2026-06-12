import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Allow root path
    if (pathname === "/") {
        return NextResponse.next();
    }

    // Redirect URLs ending with a trailing slash to the canonical non-slash version
    if (pathname.endsWith("/")) {
        const url = request.nextUrl.clone();
        url.pathname = pathname.slice(0, -1);
        return NextResponse.redirect(url, 301);
    }

    // Redirect "/solution" routes to "/solutions"
    if (pathname === "/solution") {
        return NextResponse.redirect(new URL("/solutions", request.url), 301);
    }
    if (pathname.startsWith("/solution/")) {
        const newPath = pathname.replace("/solution/", "/solutions/");
        return NextResponse.redirect(new URL(newPath, request.url), 301);
    }

    return NextResponse.next();
}

// Skip static assets, Next.js internals, and API routes
export const config = {
    matcher: [
        // Match all paths except: api/, _next/static/, _next/image/, favicon.ico, sitemap.xml, robots.txt
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};