function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0A3B74' }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-white" href="#home">
          <img src="/images/logo-placeholder.png" alt="Eventia Logo" width="40" height="40" className="me-2" />
          Eventia
        </a>

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
              <a className="nav-link text-white" href="#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="#login">Iniciar Sesión</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="#register">Registrarse</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
