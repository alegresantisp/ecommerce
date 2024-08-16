import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("cookieToken");
  const publicRoutes = ["/login", "/register"];
  const protectedRoutes = ["/dashboard", "/dashboard/orders", "/cart", "/wishlist"];
  const pathname = request.nextUrl.pathname;

  console.log("Token from cookie: ", token); // Verifica el valor del token
  console.log("Pathname: ", pathname); // Verifica la ruta actual

  // Si el token está presente y la ruta es pública, redirige al dashboard
  if (token && publicRoutes.includes(pathname)) {
    console.log("Redirecting logged-in user to dashboard");
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Si el token no está presente y la ruta es protegida, redirige al login
  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    console.log("Redirecting unauthenticated user to login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Permite el acceso a otras rutas
  return NextResponse.next();
}

export const config = {
  matcher: ["/register", "/login", "/dashboard/:path*", "/cart", "/wishlist"],
};