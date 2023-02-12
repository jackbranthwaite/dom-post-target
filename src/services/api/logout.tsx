import { API } from "./axios";
import { csrf } from "./csrf";

/**
 * Logs out the current user
 * Make sure to redirect users after this request.
 */
export const logout = async () => {
  try {
    await csrf();
    return await API.post("/logout");
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return { errors: "Could not complete the logout" };
    }
  }
};
