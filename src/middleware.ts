import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    // Store the optimization result in localStorage for client components
    if (request.nextUrl.pathname.startsWith("/api/optimize")) {
        const response = NextResponse.next()

        // Add CORS headers
        response.headers.set("Access-Control-Allow-Origin", "*")
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        response.headers.set("Access-Control-Allow-Headers", "Content-Type")

        return response
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/api/:path*"],
}
