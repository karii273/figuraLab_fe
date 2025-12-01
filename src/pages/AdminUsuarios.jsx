import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useUser } from "../hooks/useUser";
import { useState, useEffect } from "react";
import usersData from "../js/usersData.backend";

export default function AdminUsuarios() {
  const { isAdmin } = useUser();
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const data = await usersData.getUsers();
    setUsers(data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function handleDelete(email) {
    if (email === "admin@gmail.com") {
      alert("No puedes eliminar al administrador principal.");
      return;
    }

    await usersData.deleteUser(email);
    loadUsers();
  }

  if (!isAdmin) {
    return (
      <>
        <NavBar />
        <div className="container my-5">
          <h2 className="text-center text-danger">Acceso denegado</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />

      <div className="container my-5">
        <h2 className="text-center mb-4">Administración de Usuarios</h2>

        <div className="table-responsive">
          <table className="table table-striped table-bordered shadow">
            <thead className="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th style={{ width: "120px" }}>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.email}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(u.email)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}
