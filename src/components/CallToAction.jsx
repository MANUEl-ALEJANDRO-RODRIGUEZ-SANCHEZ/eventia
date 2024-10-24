'use client'

import { signIn} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

function CallToAction() {
  return (
    <section className="py-5 text-center bg-light" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold text-secondary mb-4" style={{ fontSize: '2.5rem', textTransform: 'uppercase' }}>¡Únete a nuestra comunidad!</h2>
            <p className="lead text-muted mb-5" style={{ fontSize: '1.25rem' }}>
              Crea una cuenta o inicia sesión para disfrutar de nuestros eventos socioculturales.
            </p>
            <div className="d-flex justify-content-center">
              <Link href="#" className="btn btn-primary btn-lg me-3 shadow-lg" style={{ backgroundColor: '#0A3B74', borderRadius: '50px', padding: '10px 30px', transition: 'transform 0.3s' }} onClick={() => signIn('google')}>
                Iniciar Sesión
              </Link>
              <Link href="#" className="btn btn-outline-primary btn-lg shadow-lg" style={{ borderColor: '#0A3B74', color: '#0A3B74', borderRadius: '50px', padding: '10px 30px', transition: 'transform 0.3s' }} onClick={() => signIn('google')}>
                Registrarse
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <Image src={`/images/cta-image.jpg`} alt="Comunidad de eventos" className="img-fluid rounded shadow-lg" width={1024} height={1024} style={{ maxHeight: '400px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
