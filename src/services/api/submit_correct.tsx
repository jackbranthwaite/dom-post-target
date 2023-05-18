import { API } from './axios';
import { csrf } from './csrf';

/**
 * Logs out the current user
 * Make sure to redirect users after this request.
 */
export const submitTime = async (data: object) => {
  try {
    await csrf();
    return await API.post('/api/correct-guess', data);
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      return { errors: 'Could not submit time' };
    }
  }
};

export const checkComplete = async () => {
  try {
    await csrf();
    return await API.get('/api/correct-guess');
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      return { errors: 'Could not submit time' };
    }
  }
};
