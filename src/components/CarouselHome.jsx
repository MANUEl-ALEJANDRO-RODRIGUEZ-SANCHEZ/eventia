import Image from "next/image";

function CarouselHome() {
    return (
    <>
        <div className="carousel-container">
            <div className="carousel-title">
                <h1>Eventia</h1>
                <br />
                <h2>Aqui encontrarás los mejores eventos sociales y culturales para ti en México, gracias a nuestro algoritmo de recomendación</h2>
                <br />
                <p>Comienza a explorar, unete y participa con la sociedad</p>
            </div>
            <div id="carouselHome" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src="/images/carousel1.png" className="d-block w-100 h-auto" alt="carousel image 1" width={500} height={340} priority/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Eventos sociales</h5>
                            <p className="info-slide">Evento de recaudacion de vestimenta para gente necesitada</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/carousel2.png" className="d-block w-100 h-auto" alt="carousel image 2" width={500} height={340} priority/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Eventos sociales</h5>
                            <p className="info-slide">Evento de ayuda a limpiza en areas verdes</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/carousel3.png" className="d-block w-100 h-auto" alt="carousel image 3" width={500} height={340} priority/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Eventos culturales</h5>
                            <p className="info-slide">Evento de promocio musical para talento urbano</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/carousel4.png" className="d-block w-100 h-auto" alt="carousel image 4" width={500} height={340} priority/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Evento cultural</h5>
                            <p className="info-slide">Evento de recolección de libros</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/carousel5.png" className="d-block w-100 h-auto" alt="carousel image 5" width={500} height={340} priority/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Evento social</h5>
                            <p className="info-slide">Evento de ayuda a reforestación de area rural</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
    );
}

export default CarouselHome;