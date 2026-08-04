export const fetchWithAuth = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");
  const baseURL = "http://localhost:3001/api/v1/user";

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${baseURL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();
  if (data.status !== 200) {
    localStorage.removeItem("token");
    if (data.status === 401) throw new Error("Jeton invalide ou inexistant.");
    if (data.status === 404) throw new Error("Compte introuvable.");
    throw new Error(data.message);
  }

  return data;
};
