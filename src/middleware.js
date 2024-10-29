export { default } from "next-auth/middleware";

// routes to protect from login
// export const config = { matcher: ["/perfil", "/eventos/"]};
export const config = { matcher: ["/perfil", "/eventos/:path*", "/api/:path*"] };