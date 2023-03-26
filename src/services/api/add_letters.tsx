import { API } from './axios';
import { csrf } from './csrf';

/**
 * Logs out the current user
 * Make sure to redirect users after this request.
 */
export const addLetters = async (data: object) => {
  try {
    await csrf();
    return await API.post('/api/daily-letters', data);
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      return { errors: 'Could not complete the letter additions' };
    }
  }
};
