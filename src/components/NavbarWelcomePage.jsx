import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0A3B74' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" href="#home">
          <Image src="/images/logo-placeholder.png" alt="Eventia Logo" width={40} height={40} className="me-2" />
          Eventia
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" href="#inicio">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#acerca_de_nosotros">Sobre Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" href="#login">Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" href="#register">Registrarse</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
