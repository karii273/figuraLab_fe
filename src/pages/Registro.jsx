import { useState } from "react";
import { useUser } from "../hooks/useUser";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";


export default function Registro() {
  const { register } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const res = register(name, email, pass);
    if (!res.ok) {
      setError(res.message);
    } else {
      window.location.href = "/";
    }
  }

  return (
    <>
      <NavBar />
      <div className="container my-5" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Registro de Usuario</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} className="card p-4 shadow">
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button className="btn btn-warning w-100 mt-3" type="submit">
            Registrarse
          </button>
          <BackButton/>
        </form>
      </div> 
      <Footer />
    </>
  );
}
