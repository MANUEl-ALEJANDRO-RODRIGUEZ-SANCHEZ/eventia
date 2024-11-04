import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EventCards from "@/components/Card";
import { conn } from "../../../config/db";

async function RecentEvents() {
    const session = await getServerSession(authOptions);
    const {name, email, image} = session.user;

    const [events] = await conn.query(
        `SELECT events.*, 
        CASE 
            WHEN likes.id_event IS NOT NULL THEN TRUE 
            ELSE FALSE 
        END AS isLiked
        FROM events
        LEFT JOIN likes 
        ON events.id_event = likes.id_event 
        AND likes.email_user = ?
        ORDER BY events.id_event DESC`,
        [email]
    );

    return (
        <div className="top-events">
        <h2>Eventos más recientes: </h2>
        <div className="events-container">
            {
            events.map((event, index) => (    
                <EventCards 
                key={event.id_event}
                title={event.title} 
                description={event.description}
                date={event.date}
                time={event.time}
                location={event.location}
                srcImage={`/images_events/${event.image}`}
                category={event.category}
                likes={event.likes}
                author={event.author}
                url={`/eventos/${event.id_event}`}
                isLiked = {event.isLiked}
                />
            ))
            }
        </div>
        </div>
    )
}

export default RecentEvents;