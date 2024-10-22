function About() {
    return (
      <section
        className="py-5 bg-light"
        id="acerca_de_nosotros"
        style={{
          backgroundImage: 'url(/images/background-about.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          className="container bg-light shadow-lg rounded"
          style={{
            padding: '40px',
          }}
        >
          <h2
            className="text-center fw-bold mb-4 text-secondary"
            style={{ fontSize: '2.5rem' }}
          >
            Sobre Nosotros
          </h2>
          <p className="lead text-center mb-4 text-muted">
            En Eventia, nuestro objetivo es conectar personas con los mejores eventos socioculturales en su comunidad. Facilitamos el acceso a actividades culturales que promueven el arte, la cultura y la conexión social.
          </p>
          <p className="text-center text-muted">
            Nuestro equipo está comprometido con crear una experiencia accesible y enriquecedora, ayudando a fomentar la participación y el crecimiento cultural en nuestras ciudades. Con Eventia, puedes descubrir, asistir y disfrutar de una amplia variedad de eventos.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;
  