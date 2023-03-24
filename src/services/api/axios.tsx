import Axios from 'axios';

export const DICAPI = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_DICTIONARY_ENDPOINT,
  headers: {
    Accept: 'application/json',
  },
});

Axios.defaults.withCredentials = true;

Axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      window.location.reload();
    }
    throw err;
  }
);

/**
 * Laravel API instance
 */
export const API = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    Accept: 'application/json',
  },
});
