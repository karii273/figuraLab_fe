export default function Carousel() {

  const images = [
    "/img/imgCarrusel/Figurelab.png",
    "/img/imgCarrusel/img1.jpg",
    "/img/imgCarrusel/img2.png",
    "/img/imgCarrusel/img3.jpg",
    "/img/imgCarrusel/img4.jpg",
    "/img/imgCarrusel/img5.jpg"
  ];

  return (
    <div id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000">

      <div className="carousel-indicators">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {images.map((src, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
          >
            <img src={src} className="d-block w-100" alt={`img${i}`} />
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button"
        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button"
        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
