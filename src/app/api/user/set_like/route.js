import { conn } from "../../../../../config/db";

export async function POST(req) {
    try {
        const { email, id_event } = await req.json(); 

        const [existingLike] = await conn.query(
            `SELECT * FROM likes WHERE email_user = ? AND id_event = ?`,
            [email, id_event]
        );

        if (existingLike.length > 0) {
            await conn.query(
                `DELETE FROM likes WHERE email_user = ? AND id_event = ?`,
                [email, id_event]
            );
            return new Response(JSON.stringify({ message: 'Like removed successfully' }), { status: 200 });
        } else {
            const [result] = await conn.query(
                `INSERT INTO likes (email_user, id_event) VALUES (?, ?)`,
                [email, id_event]
            );
            if (result.affectedRows > 0) {
                return new Response(JSON.stringify({ message: 'Like added successfully' }), { status: 200 });
            } else {
                return new Response(JSON.stringify({ message: 'Unable to set like' }), { status: 500 });
            }
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Error handling like', error }), { status: 500 });
    }
}
