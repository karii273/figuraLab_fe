const API_URL = "http://localhost:3000";

export default {
  async getUsers() {
    const res = await fetch(`${API_URL}/users`);
    return await res.json();
  },

  async deleteUser(email) {
    await fetch(`${API_URL}/users/${email}`, {
      method: "DELETE",
    });
  },

  async register(name, email, pass) {
    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, pass })
    });

    return await res.json();
  },

  async login(email, pass) {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, pass })
    });

    return await res.json();
  }
};
