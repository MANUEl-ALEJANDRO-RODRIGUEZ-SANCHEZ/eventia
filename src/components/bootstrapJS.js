'use client';
import { useEffect } from "react";

export default function BootstrapJS() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return <></>;
}


// import { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function BootstrapJS({ Component, pageProps }) {
//   useEffect(() => {
//     // Importar Bootstrap JavaScript solo en el lado del cliente
//     if (typeof window !== 'undefined') {
//       require('bootstrap/dist/js/bootstrap.bundle.min.js');
//     }
//   }, []);

//   return <Component {...pageProps} />;
// }

// export default BootstrapJS;
