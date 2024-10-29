import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { conn } from "../../../config/db";
import Link from "next/link";
import Image from "next/image";
import ProfileInfoPage from "@/components/ProfileInfoPage";
import EventCards from "@/components/Card";

const session = await getServerSession(authOptions);
const {name, email, image} = session.user;

async function page() {
    const [rows] = await conn.query(`SELECT * FROM users WHERE email = ?`, [email]);
    
    const user = {
        name: rows[0].name,
        email: rows[0].email,
        image: rows[0].image,
        description: rows[0].description,
        preferences: rows[0].preferences
    };

    const [ownEvents] = await conn.query(`SELECT * FROM events WHERE author = ?`, [email]);

    const [likes] = await conn.query(`SELECT events.* FROM likes JOIN events ON likes.id_event = events.id_event WHERE likes.email_user = ?`,[email]);
    
    return (
        <div className="profile-container">
            <ProfileInfoPage user={user}/>

            <div className="events-cotainer">
                <div className="own-events-container">
                    <h2>Eventos propios: </h2>
                    <div className="own-events">
                        {
                            ownEvents.map((event, index) => (    
                                <Link href={`/eventos/${event.id_event}`} className="card mb-3" style={{maxWidth: '540px', textDecoration: "none"}}>
                                    <div className="row g-0">
                                    <div className="col-md-4">
                                        <Image src={`/images_events/${event.image}`} className="img-fluid rounded-start" alt="Imagen del evento" width={1024} height={1024}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                        <h5 className="card-title">{event.title}</h5>
                                        <p className="card-text">{event.description}</p>
                                        <p className="card-text"><small className="text-body-secondary">{event.date} - {event.time}</small></p>
                                        <p className="card-text"><small className="text-body-secondary">{event.location}</small></p>
                                        <p className="card-text"><small className="text-body-secondary">Categoría: {event.category}</small></p>
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="favorites-events-container">
                    <h2>Eventos que te gustan: </h2>
                    <div className="favorites-events">
                        {
                            likes.map((event, index) => (    
                                <Link href={`/eventos/${event.id_event}`} className="card mb-3" style={{maxWidth: '540px', textDecoration: "none"}}>
                                    <div className="row g-0">
                                    <div className="col-md-4">
                                        <Image src={`/images_events/${event.image}`} className="img-fluid rounded-start" alt="Imagen del evento" width={1024} height={1024}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                        <h5 className="card-title">{event.title}</h5>
                                        <p className="card-text">{event.description}</p>
                                        <p className="card-text"><small className="text-body-secondary">{event.date} - {event.time}</small></p>
                                        <p className="card-text"><small className="text-body-secondary">{event.location}</small></p>
                                        <p className="card-text"><small className="text-body-secondary">Categoría: {event.category}</small></p>
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>







            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default page;