import Axios from 'axios';

export const DICAPI = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_DICTIONARY_ENDPOINT,
  headers: {
    Accept: 'application/json',
  },
});
