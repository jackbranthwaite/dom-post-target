import { API } from "./axios";
import { csrf } from "./csrf";

interface IInputs {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

/**
 * Registers a new user
 * @param {} inputs Registration data
 */
export const register = async (inputs: IInputs) => {
  try {
    await csrf();
    const result = await API.post("/register", inputs);
    return result;
  } catch (error: any) {
    return error.response;
  }
};
