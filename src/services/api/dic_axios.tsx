import Axios from 'axios';

Axios.defaults.withCredentials = false;

export const DICAPI = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_DICTIONARY_ENDPOINT,
  headers: {
    Accept: 'application/json',
  },
});
