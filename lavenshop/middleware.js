import { getAccessToken, getSession } from "@/services/authServices";
import {
  adminRoutes,
  protectedRoutes,
  publicRoutes,
  authRoute,
} from "@/routes";

export async function middleware(request) {
  const session =   getSession();
  const accessToken = await getAccessToken();
  const userRole = session?.authorities[0];
  const { nextUrl } = request;

  const isAuthenticated = !!accessToken;
  const isAdminRoute = nextUrl.pathname.startsWith(adminRoutes);
  const isPublicRoute =
    publicRoutes.includes(nextUrl.pathname) ||
    nextUrl.pathname.startsWith("/product");
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoute.includes(nextUrl.pathname);

  if (isAdminRoute && userRole != "ADMIN") {
    return Response.redirect(new URL("/", nextUrl));
  }

  if (isProtectedRoute && !isAuthenticated) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  if (isAuthRoute && isAuthenticated) {
    return Response.redirect(new URL("/", nextUrl));
  }

  return null;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};