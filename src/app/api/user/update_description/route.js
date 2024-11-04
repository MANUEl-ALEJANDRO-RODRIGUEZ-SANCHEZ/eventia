import { conn } from "../../../../../config/db";

export async function POST(req) {
    try {
        const { email, description } = await req.json(); // Get data from the request body

        const [result] = await conn.query(
            `UPDATE users SET description = ? WHERE email = ?`,
            [description, email]
        );
        
        if (result.affectedRows > 0) {
            return new Response(JSON.stringify({ message: 'Description updated successfully' }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ message: 'User not found or description not updated' }), { status: 404 });
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error updating description', error }), { status: 500 });
    }
}