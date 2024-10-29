// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         })
//     ]
// });

// export {handler as GET, handler as POST};

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { conn } from "../../../../../config/db";

// Define authOptions
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({user}){
            // Check if the user already exists in the database
            const [rows] = await conn.query(`SELECT * FROM users WHERE email = ?`, [user.email]);
            if(rows.length === 0){
                // Insert new user into database if it does not exist
                await conn.query(`INSERT INTO users (email, name, image, description, preferences) VALUES (?,?,?,?,?)`, [user.email, user.name, user.image, "Hola, estoy usando eventia para descubrir eventos socioculturales!", "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]"]);
            }
            return true; //Allow login
        },
        async session({ session}){
            return session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
