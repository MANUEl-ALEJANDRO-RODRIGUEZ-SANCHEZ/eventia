"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";
import Loading from "@/app/loading";
import { useState } from "react";

function Navbar() {
    const { data: session, status } = useSession();
    const [category, setCategory] = useState("")

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    if (status === "loading") {
        return (
            <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
                <Loading/>
            </div>
        );
    }else{
        return (
            <>
                {(session && session.user) && (
                    <>
                        <nav className="navbar navbar-expand-lg bg-light sticky-top" id="navbar-eventia">
                            <div className="container-fluid">
                                <Link className="navbar-brand d-flex align-items-center" href="/">
                                    <Image src="/icons/eventia_logo.png" alt="Eventia Logo" width={40} height={40}/> 
                                    <span className="ms-2">Eventia</span>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
        
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                                        <li className="nav-item me-4">
                                        <form className="d-flex">
                                            <select className="form-select me-2" aria-label="Buscar por categoría" defaultValue="" value={category} onChange={handleCategoryChange}>
                                                <option value="" disabled>Selecciona una categoría...</option>
                                                <option value="Arte">Arte</option>
                                                <option value="Ciencia">Ciencia</option>
                                                <option value="Cine y Teatro">Cine y Teatro</option>
                                                <option value="Deportes">Deportes</option>
                                                <option value="Diversidad y Derechos Humanos">Diversidad y Derechos Humanos</option>
                                                <option value="Educación">Educación</option>
                                                <option value="Emprendimiento">Emprendimiento</option>
                                                <option value="Familia y Comunidad">Familia y Comunidad</option>
                                                <option value="Festividades y Tradiciones">Festividades y Tradiciones</option>
                                                <option value="Fotografía y Video">Fotografía y Video</option>
                                                <option value="Gastronomía">Gastronomía</option>
                                                <option value="Historia y Patrimonio Cultural">Historia y Patrimonio Cultural</option>
                                                <option value="Literatura">Literatura</option>
                                                <option value="Medio Ambiente">Medio Ambiente</option>
                                                <option value="Moda y Diseño">Moda y Diseño</option>
                                                <option value="Música">Música</option>
                                                <option value="Negocios y Finanzas">Negocios y Finanzas</option>
                                                <option value="Política y Gobierno">Política y Gobierno</option>
                                                <option value="Recaudación">Recaudación</option>
                                                <option value="Religión y Espiritualidad">Religión y Espiritualidad</option>
                                                <option value="Salud y Bienestar">Salud y Bienestar</option>
                                                <option value="Sostenibilidad">Sostenibilidad</option>
                                                <option value="Sociedad">Sociedad</option>
                                                <option value="Tecnología">Tecnología</option>
                                                <option value="Voluntariado">Voluntariado</option>
                                            </select>
                                            <Link className="btn btn-outline-success" href={`/buscar/${category}`}>Buscar</Link>
                                        </form>

                                        </li>
        
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/eventos-top">Eventos Top</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/eventos-recientes">Más recientes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/nosotros">Nosotros</Link>
                                        </li>
        
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>{session.user?.name}</span>
                                                <Image src={session.user?.image || '/default-profile.png'} alt="Profile" className="profile-picture ms-2" width={40} height={40}/> 
                                                <i className="fas fa-caret-down ms-2"></i>
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" href="/perfil">Perfil</Link></li>
                                                <li><Link className="dropdown-item" href="#">Configuración</Link></li>
                                                <li><Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#modalLogOut">Cerrar sesión</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="modal fade" id="modalLogOut" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Cerrar sesión</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p>¿Seguro de cerrar sesion?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="button" className="btn btn-primary" onClick={async () => {
                                            await signOut({
                                                callbackUrl: "/",
                                            });
                                        }}>Aceptar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
    
                {(!session) && (
                    // <div>
                    //     <button onClick={() => signIn('google')}>Iniciar sesión con Google</button>
                    // </div>
                    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0A3B74' }}>
                        <div className="container-fluid">
                            <a className="navbar-brand fw-bold text-white" href="#home">
                            <Image src="/images/logo-placeholder.png" alt="Eventia Logo" width="40" height="40" className="me-2" />
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
                                <a className="nav-link text-white" href="#inicio">Inicio</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link text-white" href="#contacto">Contacto</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link text-white" href="#acerca_de_nosotros">Sobre Nosotros</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#login" onClick={() => signIn('google')}>Iniciar Sesión</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#register" onClick={() => signIn('google')}>Registrarse</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                )}
            </>
        );
    }
}

export default Navbar;
