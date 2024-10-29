import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapJS from "../components/bootstrapJS";
import Providers from "./Providers";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "../../public/css/global_styles.css";

export const metadata = {
  title: "Eventía",
  description: "Red social sobre eventos socioculturales en México",
  keywords: "Eventos sociales, Networking de eventos, Eventos comunitarios, Eventos México, Organización de eventos, Compartir eventos, Eventos culturales, Reuniones sociales, Plataforma de eventos, Red social Eventia, Eventos locales en México, Gestión de eventos, Causas sociales México, Festivales culturales, Activismo social, Apoyo comunitario, colaboración en eventos, participación social, descubrimiento de eventos"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar/>
          <main>
            {children}
          </main>
        </Providers>
        <Footer/>
      </body>
      <BootstrapJS/>
    </html>
  );
}