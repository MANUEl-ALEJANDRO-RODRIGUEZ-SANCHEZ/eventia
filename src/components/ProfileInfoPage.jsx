"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProfileInfoPage({ user }) {
    const [description, setDescription] = useState(user.description);

    const handleDescriptionChange = async () => {
        const newDescription = description;
        
        const response = await fetch('/api/user/update_description', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user.email, description: newDescription })
        });

        const data = await response.json();
        if (response.ok) {   
            alert('Descripción actualizada correctamente');
            location.reload();
        } else {
            alert('Lo sentimos, no es posible actualizar su descripción en este momento: '+data.message);
        }

    };

    return (
        <>
            <div className="user-info">
                <Image src={user.image} alt="foto de perfil" width={1024} height={1024} className="user-info-image shadow" />
                <div className="info">
                    <h2 className="info-name">{user.name}</h2>
                    <p className="info-email">{user.email}</p>
                    <p className="info-description">{user.description}</p>
                    <button className="btn-change-description" data-bs-toggle="modal" data-bs-target="#updateDescriptionModal">
                        Cambiar descripción
                    </button>
                    <button className="btn-create-event">
                        Crear evento
                    </button>
                </div>
            </div>

            {/* Modal to update description */}
            <div className="modal fade" id="updateDescriptionModal" tabIndex="-1" aria-labelledby="updateDescriptionModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updateDescriptionModalLabel">Cambiar Descripción</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <textarea
                                value={description}
                                onChange={(e) => {
                                    if(e.target.value.length <= 500){
                                        setDescription(e.target.value)
                                    }
                                }}
                                className="txt-description form-control"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={handleDescriptionChange}
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
