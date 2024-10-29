import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image"
import { conn } from "../../../../config/db"
import LikeButton from "@/components/LikeButton";

// EN ESTA PAGINA ES DONDE SE DEBE AUMENTAR LA PREFERENCIA DEL USUARIO (******************AL DARLE LIKE********************************)

async function EventDetails({params}) {
    const session = await getServerSession(authOptions);
    const {name, email, image} = session.user;

    const eventQuery = await conn.query(
        `SELECT events.*, 
        CASE 
            WHEN likes.id_event IS NOT NULL THEN TRUE 
            ELSE FALSE 
        END AS isLiked
        FROM events
        LEFT JOIN likes 
        ON events.id_event = likes.id_event 
        AND likes.email_user = ?
        WHERE events.id_event = ?`,
        [email, params.id_event]
      );

    const objectEvent = eventQuery[0];
    const event = objectEvent[0]; 

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                    <div className="card shadow-lg">
                        <Image 
                        src={`/images_events/${event.image}`} 
                        alt="Imagen del Evento" 
                        className="card-img-top" 
                        width={1024} 
                        height={1024}
                        priority 
                        style={{width: '100%', height: 'auto'}}
                        />

                        <div className="card-body">
                        <h2 className="card-title display-5">{event.title}</h2>
                        <p className="card-text text-muted">{event.description}</p>

                        <div className="row mt-4">
                            <div className="col-md-6">
                            <h6><i className="far fa-calendar-alt me-2"></i>Fecha</h6>
                            <p>{event.date}</p>

                            <h6><i className="far fa-clock me-2"></i>Hora</h6>
                            <p>{event.time}</p>
                            </div>

                            <div className="col-md-6">
                            <h6><i className="fas fa-map-marker-alt me-2"></i>Ubicación</h6>
                            <p>{event.location}</p>

                            <h6><i className="fas fa-tags me-2"></i>Categoría</h6>
                            <p>{event.category}</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="d-flex align-items-center">
                            <span>Autor: <strong>{event.author}</strong></span>
                            </div>
                            
                            <div>
                                <LikeButton email={email} event={event}/>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventDetails;