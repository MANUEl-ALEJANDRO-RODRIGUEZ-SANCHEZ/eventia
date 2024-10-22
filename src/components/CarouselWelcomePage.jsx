import Image from "next/image";

function Carousel() {
  return (
    <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#eventCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#eventCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#eventCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#eventCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src="/images/arte.jpg"
            className="d-block w-100"
            alt="Arte"
            width={1024}
            height={1024}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px 10px', borderRadius: '5px', display: 'inline-block' }}>
            <h5 style={{ color: '#fff', fontSize: '1.5rem' }}>Arte</h5>
            <p style={{ color: '#fff', fontSize: '1rem' }}>Descubre los mejores eventos de tu ciudad.</p>
          </div>
        </div>
        <div className="carousel-item">
          <Image
            src="/images/arte.jpg"
            className="d-block w-100"
            alt="Arte"
            width={1024}
            height={1024}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px 10px', borderRadius: '5px', display: 'inline-block' }}>
            <h5 style={{ color: '#fff', fontSize: '1.5rem' }}>Arte</h5>
            <p style={{ color: '#fff', fontSize: '1rem' }}>Descubre los mejores eventos de tu ciudad.</p>
          </div>
        </div>
        <div className="carousel-item">
          <Image
            src="/images/tecnologia.jpg"
            className="d-block w-100"
            alt="Tecnologia"
            width={1024}
            height={1024}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px 10px', borderRadius: '5px', display: 'inline-block' }}>
            <h5 style={{ color: '#fff', fontSize: '1.5rem' }}>Tecnologia</h5>
            <p style={{ color: '#fff', fontSize: '1rem' }}>Participa en nuestras actividades socioculturales.</p>
          </div>
        </div>
        <div className="carousel-item">
          <Image
            src="/images/literatura.jpg"
            className="d-block w-100"
            alt="Literatura"
            width={1024}
            height={1024}
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px 10px', borderRadius: '5px', display: 'inline-block' }}>
            <h5 style={{ color: '#fff', fontSize: '1.5rem' }}>Literatura</h5>
            <p style={{ color: '#fff', fontSize: '1rem' }}>Conéctate con tu comunidad local.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#eventCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#eventCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
