import { Link } from "react-router-dom";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom pb-3 border-light logo">
              FiguraLab
            </h2>

            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <a
                  className="text-decoration-none"
                  href="https://www.google.com/maps/place/Peor+es+Nada,+Chimbarongo,+O'Higgins"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donde el diablo perdió el poncho 123
                </a>
              </li>

              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="tel:6006009950">
                  600 600 9950
                </a>
              </li>

              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a className="text-decoration-none" href="mailto:Karina.desing@ZMR.com">
                  Karina.desing@ZMR.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">Productos</h2>
            <ul className="list-unstyled text-light footer-link-list">

              <li>
                <Link to="/catalogo?categoria=Anime" className="text-decoration-none text-light">
                  Anime
                </Link>
              </li>

              <li>
                <Link to="/catalogo?categoria=Videojuegos" className="text-decoration-none text-light">
                  Videojuegos
                </Link>
              </li>

              <li>
                <Link to="/catalogo?categoria=Comics" className="text-decoration-none text-light">
                  Comics
                </Link>
              </li>

              <li>
                <Link to="/catalogo?categoria=Pelicula" className="text-decoration-none text-light">
                  Películas
                </Link>
              </li>

            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">Condiciones</h2>
            <ul className="list-unstyled text-light footer-link-list">

              <li>
                <Link to="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/contacto" className="text-decoration-none text-light">
                  Contáctanos
                </Link>
              </li>

            </ul>
          </div>

        </div>

        <div className="row text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>

          <div className="col-auto me-auto">
            <a
              className="text-light text-decoration-none ms-3"
              target="_blank"
              rel="noopener noreferrer"
              href="http://facebook.com/"
            >
              <img src="/img/imgEnlaces/facebook.png" width="50" alt="facebook" />
            </a>

            <a
              className="text-light text-decoration-none ms-3"
              target="_blank"
              rel="noopener noreferrer"
              href="http://instagram.com"
            >
              <img src="/img/imgEnlaces/instagram.png" width="50" alt="instagram" />
            </a>

            <a
              className="text-light text-decoration-none ms-3"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@valem_dicrim"
            >
              <img src="/img/imgEnlaces/youtube.png" width="50" alt="youtube" />
            </a>

            <a
              className="text-light text-decoration-none ms-3"
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.whatsapp.com/"
            >
              <img src="/img/imgEnlaces/whatsapp.png" width="50" alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-100 bg-black py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <p className="text-left text-light">
                Copyright © 2025 ZMR Design |
                Designed by{" "}
                <a
                  rel="sponsored"
                  href="https://www.youtube.com/@valem_dicrim"
                  target="_blank"
                  className="text-decoration-none text-light"
                >
                  Dicrim_Karina
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}