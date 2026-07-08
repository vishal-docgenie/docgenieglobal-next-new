import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const host = request.headers.get("host") ?? "";
    const hostname = host.split(":")[0]; // strip port

    if (
        hostname === "localhost" ||
        hostname === "127.0.0.1" ||
        hostname.endsWith(".local")
    ) {
        return NextResponse.next();
    }

    // Only add www to a bare apex (one dot), not to subdomains like app.example.com
    const isApex = hostname.split(".").length === 2;

    if (isApex && !hostname.startsWith("www.")) {
        const url = request.nextUrl.clone();
        url.host = `www.${host}`; // use .host to preserve port if present
        return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next|favicon.ico|.*\\..*).*)",
    ],
};