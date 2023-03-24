import React from 'react';
import { DICAPI } from '../api/axios';

// interface IDictionary {
//   word: string;
// }

export const checkDictionary = async (word) => {
  console.log(word);
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
