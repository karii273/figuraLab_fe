import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function NavBar() {
  const { user, isLogged, isAdmin, logout } = useUser();

  return (
    <header className="w-100 m-0 p-0">
      <nav className="navbar navbar-expand-lg bg-warning-subtle shadow-sm w-100">
        <div className="container-fluid">

          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/img/reno.png"
              alt="Logo"
              width="60"
              height="60"
              className="me-2"
            />
            <span className="fw-bold">FIGURA LAB</span>
          </Link>

          {/* Botón mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/catalogo">
                  Catálogo
                </Link>
              </li>

              {/* Admin */}
              {isAdmin && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/productos">
                      Admin Productos
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/usuarios">
                      Admin Usuarios
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {/* No logueado */}
            {!isLogged && (
              <>
                <Link className="btn btn-outline-warning ms-2" to="/registro">
                  Regístrate
                </Link>

                <Link className="btn btn-outline-warning ms-2" to="/login">
                  Inicio sesión
                </Link>
              </>
            )}

            {/* Logueado */}
            {isLogged && (
              <button
                className="btn btn-outline-danger ms-2"
                onClick={logout}
              >
                Cerrar sesión
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
