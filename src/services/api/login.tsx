import { API } from "./axios";
import { csrf } from "./csrf";

/**
 * Logs in a user
 * @param { email: string, password: string } inputs The login credentials.
 */

interface IInputs {
  email: string;
  password: string;
}

export const login = async (inputs: IInputs) => {
  const data = new URLSearchParams(inputs);

  try {
    await csrf();
    return await API.post("/login", data);
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      return { errors: "Could not complete the login" };
    }
  }
};
