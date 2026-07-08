// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // Never normalize the host during local development
    if (process.env.NODE_ENV !== "production") {
        return NextResponse.next();
    }

    const host = request.headers.get("host") ?? "";
    const hostname = host.split(":")[0]; // strip port

    if (hostname === "localhost" || hostname === "127.0.0.1") {
        return NextResponse.next();
    }

    const isApex = hostname.split(".").length === 2;

    if (isApex && !hostname.startsWith("www.")) {
        const url = request.nextUrl.clone();
        url.host = `www.${hostname}`; // hostname only — drops the port
        url.port = "";               // belt-and-suspenders
        return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};