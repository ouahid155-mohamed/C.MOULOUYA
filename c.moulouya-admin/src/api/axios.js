import axios from "axios";

const normalizeApiBaseUrl = (value) => {
  const raw = (value || "").trim().replace(/\/+$/, "");
  const base = raw || (import.meta.env.DEV ? "http://localhost:8000" : "/api");
  return base.endsWith("/api") ? base : `${base}/api`;
};

const api = axios.create({
  baseURL: normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

// Attache automatiquement le token à chaque requête
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Redirige vers login si token expiré
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("admin_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
