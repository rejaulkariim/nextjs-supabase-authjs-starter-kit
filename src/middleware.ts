// export { auth as middleware } from "@/auth";

import { auth } from "@/lib/auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];
const authRoutes = ["/auth/login"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  const isAuthRoute = authRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Redirect to "/auth/login" if trying to access protected routes without being logged in
  if (!session && isProtected) {
    const signInURL = new URL("/auth/login", request.nextUrl.origin);
    return NextResponse.redirect(signInURL.toString());
  }

  // Redirect to "/dashboard" if logged in and trying to access /auth/sign-in
  if (session && isAuthRoute) {
    const dashboardURL = new URL("/dashboard", request.nextUrl.origin);
    return NextResponse.redirect(dashboardURL.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
