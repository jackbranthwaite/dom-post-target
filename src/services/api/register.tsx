import { API } from "./axios";
import { csrf } from "./csrf";

/**
 * Registers a new user
 * @param {} inputs Registration data
 */
export const register = async (inputs) => {
  console.log(await csrf());
  try {
    await csrf();
    const result = await API.post("/register", inputs);
    return result;
  } catch (error) {
    return error.response;
  }
};
