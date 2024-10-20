function Contact() {
  return (
    <section className="py-5 bg-light" id="contacto" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-secondary">Contáctanos</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="p-4 rounded shadow-lg bg-white">
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-secondary">Nombre</label>
                <input type="text" className="form-control border border-primary rounded" id="name" placeholder="Tu nombre" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-secondary">Correo Electrónico</label>
                <input type="email" className="form-control border border-primary rounded" id="email" placeholder="Tu correo" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-secondary">Mensaje</label>
                <textarea className="form-control border border-primary rounded" id="message" rows="4" placeholder="Tu mensaje" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#0A3B74', borderRadius: '50px' }}>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
