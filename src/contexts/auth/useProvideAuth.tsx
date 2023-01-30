import React, { SetStateAction, useEffect, useState } from "react";
import { login as APILogin } from "../../services/api/login";
import { logout as APILogout } from "../../services/api/logout";
// import { forgot as APIForgot } from "../../services/api/forgot";
// import { reset as APIReset } from "../../services/api/reset";
import { register as APIRegister } from "../../services/api/register";
import { getUser } from "../../services/api/user";

interface IUser {
  name: string;
  email: string;
  id: number;
}

export const useProvideAuth = () => {
  const [user, setUser] = useState<IUser | null>();
  const [authStatus, setAuthStatus] = useState("pending");

  const login = async (credentials: any) => {
    const data = await APILogin(credentials);

    if (data.status === 200) {
      await fetchUser();
    }
    return data;
  };

  const register = (details: any) => {
    return APIRegister(details).then((data) => {
      if (data.status === 201) {
        return fetchUser().then(() => {
          return data;
        });
      } else {
        return data;
      }
    });
  };

  const logout = () =>
    APILogout().then((data) => {
      setUser(null);
      return data;
    });

  // const forgot = async (details: any) => {
  //   const data = await APIForgot(details);
  //   return data;
  // };

  // const reset = async (details) => {
  //   const result = await APIReset(details);
  //   return result;
  // };

  const fetchUser = async () => {
    if (user) return;
    await forceFetchUser();
  };

  const forceFetchUser = async () => {
    try {
      const user = await getUser();
      if (user.status !== 200) {
        setUser(null);
        return;
      }
      setUser(user.data.data);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
    return () => fetchUser();
  }, []);

  React.useEffect(() => {
    setAuthStatus(user ? "authenticated" : "unauthenticated");
  }, [user]);

  return {
    user,
    login,
    register,
    logout,
    // forgot,
    // reset,
    authStatus,
    forceFetchUser,
  };
};
