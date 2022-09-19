import Axios from "axios";

Axios.defaults.withCredentials = true;

/**
 * Laravel API instance
 */
export const API = Axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_ENDPOINT,
  headers: {
    Accept: "application/json",
  },
});
