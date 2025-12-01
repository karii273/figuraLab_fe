import { useState } from "react";
import usersBackend from "../js/usersData.backend";

export function useUser() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("APP_USER")) || null
  );

  const isLogged = !!user;
  const isAdmin = user?.role === "admin";

  async function register(name, email, pass) {
    const res = await usersBackend.register(name, email, pass);
    if (res.error) return { ok: false, message: res.error };
    return { ok: true };
  }

  async function login(email, pass) {
    const res = await usersBackend.login(email, pass);

    if (!res.ok) {
      return { ok: false, message: "Credenciales incorrectas" };
    }

    localStorage.setItem("APP_USER", JSON.stringify(res.user));
    setUser(res.user);

    return { ok: true };
  }

  function logout() {
    localStorage.removeItem("APP_USER");
    setUser(null);
  }

  return { user, isLogged, isAdmin, register, login, logout };
}
