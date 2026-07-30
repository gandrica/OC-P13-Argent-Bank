export const fetchWithAuth = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");
  console.log(token);
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

  return data;
};
