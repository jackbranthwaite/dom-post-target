import { API } from "./axios";
import { csrf } from "./csrf";

/**
 * Logs in a user
 * @param { email: string, password: string } inputs The login credentials.
 */
export const login = async (inputs: any) => {
  const data = new URLSearchParams(inputs);

  try {
    await csrf();
    return await API.post("/api/login", data);
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      return { errors: "Could not complete the login" };
    }
  }
};
