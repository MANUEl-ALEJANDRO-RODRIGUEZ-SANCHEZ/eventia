export { default } from "next-auth/middleware";

// routes to protect from login
export const config = { matcher: ["/perfil"]};