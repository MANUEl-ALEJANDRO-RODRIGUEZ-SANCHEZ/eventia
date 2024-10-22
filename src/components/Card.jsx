"use client";

import { useEffect } from "react";

const EventCards = () => {
  useEffect(() => {
    // Selecciona todas las cards con la clase 'card'
    const cards = document.querySelectorAll(".card");

    // Crea un observer para detectar cuando las cards son visibles
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Añade la clase 'show' cuando el elemento es visible
        }
      });
    }, {
      threshold: 0.1, // El 10% de la card tiene que estar visible para activar la animacion
    });

    // Observa cada card
    cards.forEach((card) => {
      observer.observe(card);
    });

    // Limpia el observer cuando el componente se desmonta
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/path/to/image1.jpg" className="card-img-top" alt="Evento 1" />
            <div className="card-body">
              <h5 className="card-title">Evento 1</h5>
              <p className="card-text">Descripción del evento.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/path/to/image2.jpg" className="card-img-top" alt="Evento 2" />
            <div className="card-body">
              <h5 className="card-title">Evento 2</h5>
              <p className="card-text">Descripción del evento.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
