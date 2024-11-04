import fs from 'fs';
import { conn } from '../../../../../config/db';
import path from 'path';

export async function POST(request) {
    try {
        const formData = await request.formData();
        
        const title = formData.get('title');
        const description = formData.get('description');
        const date = formData.get('date');
        const time = formData.get('time');
        const location = formData.get('location');
        const image = formData.get('image'); // this is image file
        const category = formData.get('category');
        const likes = formData.get('likes');
        const author = formData.get('author');
        const category_vector = formData.get('category_vector');

        if (image) {
            const [result] = await conn.query(
                "INSERT INTO events (title, description, date, time, location, image, category, likes, author, category_vector) VALUES (?, ?, ?, ?, ?, '', ?, ?, ?, ?);",
                [title, description, date, time, location, category, likes, author, category_vector]
            );

            const id_event = result.insertId;

            const imageName = `${id_event}.jpg`; // rename image with id_event

            // save image in the folder
            const uploadDir = path.join(process.cwd(), 'public/images_events'); 
            const filePath = path.join(uploadDir, imageName);
            const buffer = Buffer.from(await image.arrayBuffer());

            fs.writeFileSync(filePath, buffer); // save image

            // update name image
            await conn.query("UPDATE events SET image = ? WHERE id_event = ?;", [imageName, id_event]);

            return new Response(JSON.stringify({ id_event }), { status: 200 });
        } else {
            return new Response('No se encontró la imagen', { status: 400 });
        }

    } catch (error) {
        console.error('Error en la creación del evento:', error);
        return new Response('Error en la creación del evento', { status: 500 });
    }
}
