'use client'

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";

function CreateEvent() {
    const {data: session, status} = useSession();
    // session.user.name
    const [loading, setLoading] = useState(false);
    const [successfulModal, setSuccessfulModal] = useState(false);
    const [errorModalMsj, setErrorModalMsj] = useState("false");
    const [errorModal, setErrorModal] = useState(false);

    const [txtGenerateIA, setTxtGenerateIA] = useState("");

    useEffect(() => {
        if (session) {
            setEventInfo(prev => ({
                ...prev,
                author: session.user.email
            }));
        }
    }, [session]);

    // Event details
    const [eventInfo, setEventInfo] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        image: null,
        category: "Arte",
        likes: 0,
        author: ``,
        category_vector: JSON.stringify([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
    });

    // mapping category
    const categoryIndexMap = {
        "Arte": 0,
        "Ciencia": 1,
        "Cine y Teatro": 2,
        "Deportes": 3,
        "Diversidad y Derechos Humanos": 4,
        "Educación": 5,
        "Emprendimiento": 6,
        "Familia y Comunidad": 7,
        "Festividades y Tradiciones": 8,
        "Fotografía y Video": 9,
        "Gastronomía": 10,
        "Historia y Patrimonio Cultural": 11,
        "Literatura": 12,
        "Medio Ambiente": 13,
        "Moda y Diseño": 14,
        "Música": 15,
        "Negocios y Finanzas": 16,
        "Política y Gobierno": 17,
        "Recaudación": 18,
        "Religión y Espiritualidad": 19,
        "Salud y Bienestar": 20,
        "Sostenibilidad": 21,
        "Sociedad": 22,
        "Tecnología": 23,
        "Voluntariado": 24
    };

    // generate category vector 
    const generateCategoryVector = (category) => {
        const newVector = Array(25).fill(0); 
        const categoryIndex = categoryIndexMap[category];
        if (categoryIndex !== undefined) {
            newVector[categoryIndex] = 1; 
        }
        setEventInfo(prev => ({ ...prev, category }));
        setEventInfo(prev => ({ ...prev, category_vector: JSON.stringify(newVector), }));
    };

    const handleCategoryChange = (e) => {
        generateCategoryVector(e.target.value);
    };

    const setTitleEvent = title => {
        setEventInfo(prev => ({ ...prev, title }));
    }

    const setDescriptionEvent = description => {
        setEventInfo(prev => ({ ...prev, description }));
    }

    const setDateEvent = date => {
        setEventInfo(prev => ({ ...prev, date }));
    }

    const setTimeEvent = time => {
        setEventInfo(prev => ({ ...prev, time }));
    }

    const setLocationEvent = location => {
        setEventInfo(prev => ({ ...prev, location }));
    }

    const setImageEvent = image => {
        setEventInfo(prev => ({ ...prev, image }));
    }

    const clearForm = () => {
        setEventInfo({
            title: "",
            description: "",
            date: "",
            time: "",
            location: "",
            image: null,
            category: "Arte",
            likes: 0,
            author: ``,
            category_vector: JSON.stringify([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!eventInfo.title || !eventInfo.description || !eventInfo.date || !eventInfo.time || !eventInfo.location || !eventInfo.image || !eventInfo.category) {
            setErrorModalMsj("Por favor, completa todos los campos obligatorios.");
            setErrorModal(true);
            return;
        }
        
        // Crear un FormData para enviar los datos
        const formData = new FormData();
        formData.append('image', eventInfo.image); // Suponiendo que eventInfo.image contiene el archivo de la imagen
        formData.append('title', eventInfo.title);
        formData.append('description', eventInfo.description);
        formData.append('date', eventInfo.date);
        formData.append('time', eventInfo.time);
        formData.append('location', eventInfo.location);
        formData.append('category', eventInfo.category);
        formData.append('likes', eventInfo.likes);
        formData.append('author', eventInfo.author);
        formData.append('category_vector', eventInfo.category_vector);

        try {
            const response = await fetch('/api/user/create_event', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error al crear el evento');
            }

            const result = await response.json();
            setSuccessfulModal(true);
            clearForm();

        } catch (error) {
            console.error(error);
            setErrorModalMsj("Error al crear el evento, por favor intenta de nuevo.");
            setErrorModal(true);
        } finally {
            setLoading(false);
        }
    };
    
    const generateEventWithIA = async description => {
        setTxtGenerateIA("Cargando, cierre esta ventana");
        setEventInfo(prev => ({ ...prev, description: "Cargando..." }));
        const prompt = `
            Quiero crear un evento sociocultural basado en la siguiente descripción: ${description}
            Dame un titulo y una descripción muy creativa y llamativa que me ayude a mejorar el alcance de mi evento
            Dame solo la información con el siguiente formato:
            Titulo: [TITULO]
            Descripción: [DESCRIPCION]
        `;

        try {
            const res = await fetch('/api/user/generate_event_with_IA', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
            const data = await res.json();
            if (data) {
                const titleMatch = data.text.match(/Titulo:\s*\[(.*?)\]/i);
                const descriptionMatch = data.text.match(/Descripción:\s*\[(.*?)\]/i);

                const titleIA = titleMatch ? titleMatch[1] : '';
                const descriptionIA = descriptionMatch ? descriptionMatch[1] : '';

                setEventInfo(prev => ({ ...prev, title: titleIA }));
                setEventInfo(prev => ({ ...prev, description: descriptionIA }));
            } else {
                setEventInfo(prev => ({ ...prev, description: "No se pudo generar el texto." }));
            }
        } catch (error) {
            console.error('Error:', error);
            setEventInfo(prev => ({ ...prev, description: "Ocurrió un error al generar el texto." }));
        }
    }

    return (
        <>
            <div className="container py-5" style={{minHeight: "90vh"}} id="create_event">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="content-container text-center">
                            <Image src="/icons/eventia_logo.png" alt="Evento Imagen" className="img-fluid rounded mb-4" width={512} height={512} priority/>
                            <h3>Crea tu evento con Eventia</h3>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-container">
                            <h2 className="text-center mb-4">Crear Nuevo Evento</h2>
                            <form id="eventoForm" onSubmit={handleSubmit}>
                                <div className="mb-3 icon-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                    </svg> Nombre del evento
                                    <input type="text" className="form-control" id="nombreEvento" placeholder="Nombre del evento" required value={eventInfo.title}
                                        onChange={(e) => {
                                            if(e.target.value.length <= 250){
                                                setTitleEvent(e.target.value)
                                            }
                                        }}
                                    />
                                </div>
                                <div className="mb-3 icon-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                                    </svg> Descripción del evento
                                    <textarea className="form-control" id="descripcionEvento" rows="3" placeholder="Descripción del evento" required value={eventInfo.description} 
                                        onChange={(e) => {
                                            if(e.target.value.length <= 1020){
                                                setDescriptionEvent(e.target.value)
                                            }
                                        }}
                                    ></textarea>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 icon-input">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
                                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                        </svg> Fecha del evento
                                        <input type="date" className="form-control" id="fechaEvento" required value={eventInfo.date} 
                                            onChange={(e) => {
                                                setDateEvent(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6 icon-input">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                        </svg> Hora del evento
                                        <input type="time" className="form-control" id="horaEvento" required value={eventInfo.time}
                                            onChange={(e) => {
                                                setTimeEvent(e.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 icon-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg> Ubicación del evento
                                    <input type="text" className="form-control" id="ubicacionEvento" placeholder="Ubicación del evento" required value={eventInfo.location}
                                        onChange={(e) => {
                                            if(e.target.value.length <= 250){
                                                setLocationEvent(e.target.value)
                                            }
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imagenEvento" className="form-label">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                                        </svg> Imagen del evento
                                    </label>
                                    <input type="file" className="form-control" id="image" name="image" accept="image/*" required
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                setImageEvent(file);
                                            }
                                        }}
                                    />
                                </div>
                                <div className="mb-3 icon-input">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tag" viewBox="0 0 16 16">
                                        <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
                                        <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/>
                                    </svg> Seleccione una categoría
                                    <select className="form-select" id="categoriaEvento" required value={eventInfo.category} onChange={handleCategoryChange}>
                                        {Object.keys(categoryIndexMap).map((category) => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                        </svg> {loading ? 'Creando...' : 'Crear Evento'}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="mb-3">
                            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#create_event_with_IA">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
                                </svg> Generar Título y Descripción Automáticamente
                            </button>
                        </div>                
                    </div>
                </div>
            </div>

            <div className="modal fade" id="create_event_with_IA" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Usar inteligencia artificial para potenciar tu publicación</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <textarea id="txt-generate-IA" placeholder="Describe detalladamente tu idea de evento" style={{width: "100%", resize: "none"}} value={txtGenerateIA} 
                            onChange={(e) => {
                                if(e.target.value.length <= 1000){
                                    setTxtGenerateIA(e.target.value)
                                }
                            }}
                        required></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary" onClick={() => {generateEventWithIA(txtGenerateIA)}}>Aceptar</button>
                    </div>
                    </div>
                </div>
            </div>


            {/* successful create event case */}
            <div className={`modal fade ${successfulModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: successfulModal ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}>
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Eventia</h5>
                    <button type="button" className="close" onClick={() => setSuccessfulModal(false)} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <p>¡Evento creado con exito!</p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setSuccessfulModal(false)}>Aceptar</button>
                    </div>
                </div>
                </div>
            </div>

            {/* error create event case */}
            <div className={`modal fade ${errorModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ backgroundColor: errorModal ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}>
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Eventia</h5>
                    <button type="button" className="close" onClick={() => setErrorModal(false)} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <p>{errorModalMsj}</p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setErrorModal(false)}>Aceptar</button>
                    </div>
                </div>
                </div>
            </div>
            
        </>
    )
}

export default CreateEvent;