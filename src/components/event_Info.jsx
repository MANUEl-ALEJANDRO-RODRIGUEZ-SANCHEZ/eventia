function EventInfo() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <img 
              src={`${process.env.PUBLIC_URL}/images/event_benefit1.jpg`} 
              alt="Eventos Cercanos" 
              className="img-fluid rounded-circle mb-4 shadow-lg"
              style={{ width: '220px', height: '220px', objectFit: 'cover', border: '5px solid #0A3B74' }}  // Bordes y tamaño mejorado
            />
            <h3 className="fw-bold text-secondary">Eventos Cercanos</h3>
            <p className="text-muted">Encuentra eventos socioculturales en tu ciudad y conéctate con tu comunidad.</p>
          </div>
          <div className="col-md-4">
            <img 
              src={`${process.env.PUBLIC_URL}/images/event_benefit2.jpg`} 
              alt="Recomendaciones Personalizadas" 
              className="img-fluid rounded-circle mb-4 shadow-lg"
              style={{ width: '220px', height: '220px', objectFit: 'cover', border: '5px solid #0A3B74' }}  // Bordes y tamaño mejorado
            />
            <h3 className="fw-bold text-secondary">Recomendaciones Personalizadas</h3>
            <p className="text-muted">Recibe sugerencias basadas en tus intereses y participa en los mejores eventos.</p>
          </div>
          <div className="col-md-4">
            <img 
              src={`${process.env.PUBLIC_URL}/images/event_benefit3.jpg`} 
              alt="Actividades Exclusivas" 
              className="img-fluid rounded-circle mb-4 shadow-lg"
              style={{ width: '220px', height: '220px', objectFit: 'cover', border: '5px solid #0A3B74' }}  // Bordes y tamaño mejorado
            />
            <h3 className="fw-bold text-secondary">Actividades Exclusivas</h3>
            <p className="text-muted">Accede a eventos y actividades exclusivas solo para miembros registrados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventInfo;
