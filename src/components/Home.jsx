import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CarouselHome from "./CarouselHome";
import EventCards from "./Card";
import { conn } from "../../config/db";
import Link from "next/link";

async function Home() {
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
    <>
        <CarouselHome/>
        <br /><br /><br />
        <h3>Eventos recomendados: </h3><hr />
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
    </>
  )
}

export default Home;