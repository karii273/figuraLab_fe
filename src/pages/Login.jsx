import { useState } from "react";
import { useUser } from "../hooks/useUser";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";

export default function Login() {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const allowedDomains = ["gmail.com", "gmail.cl", "duocuc.cl"];
    const emailDomain = email.split("@")[1];

    if (!allowedDomains.includes(emailDomain)) {
      setError("El correo debe terminar en @gmail.com, @gmail.cl o @duocuc.cl");
      return;
    }

    const res = await login(email, pass);

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
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} className="card p-4 shadow">
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.cl"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="*****"
            />
          </div>
          <button className="btn btn-warning w-100 mt-3" type="submit">
            Ingresar
          </button>
          <BackButton />
        </form>
      </div>
      <Footer />
    </>
  );
}
