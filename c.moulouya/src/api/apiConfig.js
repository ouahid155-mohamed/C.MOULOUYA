const normalizeApiBaseUrl = (value) => {
  const raw = (value || "").trim().replace(/\/+$/, "");
  const base = raw || (import.meta.env.DEV ? "http://localhost:8000" : "/api");
  return base.endsWith("/api") ? base : `${base}/api`;
};

export const API_BASE_URL = normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL);

export const API_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "true",
};
