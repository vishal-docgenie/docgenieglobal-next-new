import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Allow root path
    if (pathname === "/") {
        return NextResponse.next();
    }

    // Redirect URLs ending with a trailing slash to /404 AND set status to 404
    if (pathname.endsWith("/")) {
        return NextResponse.rewrite(new URL("/404", request.url), { status: 404 });
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