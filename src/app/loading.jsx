'use client';

const Loading = () => {
  return (
    <div className="loading-overlay d-flex justify-content-center align-items-center">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status" style={{ width: "4rem", height: "4rem" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3 className="mt-4 text-light">Cargando...</h3>
      </div>

      <style jsx>{`
        .loading-overlay {
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.8); 
          z-index: 9999;
        }
      `}</style>
    </div>
  );
};

export default Loading;
