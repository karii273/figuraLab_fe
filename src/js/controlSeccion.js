function applySessionUI() {
  const user = JSON.parse(localStorage.getItem("APP_CURRENT_USER"));

  if (user) {
    document.getElementById("btn-register")?.classList.add("d-none");
    document.getElementById("btn-login")?.classList.add("d-none");

    document.getElementById("btn-logout")?.classList.remove("d-none");

    if (user.role === "admin") {
      document.getElementById("nav-ad-producto")?.classList.remove("d-none");
      document.getElementById("nav-ad-usuario")?.classList.remove("d-none");
    }
  }

  document.getElementById("btn-logout")?.addEventListener("click", () => {
    localStorage.removeItem("APP_CURRENT_USER");
    window.location.href = "inicio.html";
  });
}
