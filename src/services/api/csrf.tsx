import { API } from "./axios";

/**
 * Requests a CSRF token
 * Axios will automatically save this token and use it on subsequent requests.
 */
export const csrf = async () => {
  try {
    await API.get("/sanctum/csrf-cookie");
  } catch (error: any) {
    return error.response;
  }
};
