import { NextResponse } from "next/server";
import { store } from "./redux/store";

export function middleware(request) {
    const { auth } = store().getState();

    if (auth?.isAuthenticated && request.nextUrl.pathname !== "/play") {
        return NextResponse.redirect(new URL("/play", request.url));
    }

    if (!auth?.isAuthenticated && request.nextUrl.pathname !== "/") {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ["/((?!api|v1|play|/|_next/static|_next/image|.*\\.png$).*)"],
};