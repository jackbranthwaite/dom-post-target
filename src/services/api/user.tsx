import { API } from "./axios";

/**
 * Gets the current user
 */
export const getUser = async (id = false) => {
  try {
    return await API.get("/api/user" + (id ? `/${id}` : ""));
  } catch (error) {
    console.log(error);
    if (error.response) {
      return error.response.data;
    } else {
      return { errors: "Could not complete the request." };
    }
  }
};

export const updateUser = async (data) => {
  return await API.patch(`/api/user`, data);
};

export const allUsers = async () => {
  return await API.get("/api/users");
};

export const changePassword = async (data) => {
  return await API.put("/user/password", data);
};
