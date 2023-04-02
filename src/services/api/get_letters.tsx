import { API } from './axios';
import { csrf } from './csrf';

/**
 * Logs out the current user
 * Make sure to redirect users after this request.
 */
export const getLetters = async () => {
  try {
    await csrf();
    return await API.get('/api/daily-letters');
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      return { errors: 'Could not complete the letter request' };
    }
  }
};
