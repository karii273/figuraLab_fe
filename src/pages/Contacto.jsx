import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";


export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }

    setEnviado(true);
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  return (
    <>
      <NavBar />
      <div className="container my-5" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Contáctanos</h2>

        {enviado && (
          <div className="alert alert-success text-center">
            ¡Mensaje enviado correctamente! 💜
            Te responderemos pronto.
          </div>
        )}

        <form className="card p-4 shadow" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Enviar mensaje
          </button>
        </form>
      </div>
      <BackButton/>
      <Footer />
    </>
  );
}