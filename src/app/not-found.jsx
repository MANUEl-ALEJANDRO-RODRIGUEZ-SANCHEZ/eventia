import Link from 'next/link';
import Image from 'next/image';

import Navbar from '@/components/Navbar';

export default async function NotFound() {

    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
                <Image src="/icons/eventia_logo.png" alt="Eventia Logo" width={200} height={200} className="mb-4" />
                <h1 className="display-4">Página no encontrada</h1>
                <p className="lead mb-4">
                    Parece que la página que buscas no existe. Puede que el evento haya sido cancelado o la URL sea incorrecta.
                </p>
                <Link href="/" className="btn btn-primary btn-lg mb-2">
                    Volver a la página principal
                </Link>
                <div className="mt-5">
                    <p className="text-muted">¿Te perdiste en el evento equivocado? ¡No te preocupes, tenemos muchas más opciones en Eventia!</p>
                </div>
            </div>
        </>
    );
    }
