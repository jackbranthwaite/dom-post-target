import { API } from "./axios";

/**
 * Gets the current user
 */
export const getUser = async (id = false) => {
  try {
    return await API.get("/api/user" + (id ? `/${id}` : ""));
  } catch (error: any) {
    console.log(error);
    if (error.response) {
      return error.response.data;
    } else {
      return { errors: "Could not complete the request." };
    }
  }
};

export const updateUser = async (data: any) => {
  return await API.patch(`/api/user`, data);
};
