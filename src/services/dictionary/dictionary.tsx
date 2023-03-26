import React from 'react';
import { DICAPI } from '../api/dic_axios';

// interface IDictionary {
//   word: string;
// }

export const checkDictionary = async (word) => {
  try {
    return await DICAPI.get(`/en/${word}`);
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { errors: 'Could not complete the request.' };
    }
  }
};
