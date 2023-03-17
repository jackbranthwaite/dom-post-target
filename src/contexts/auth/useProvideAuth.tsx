import React from "react";
import { login as APILogin } from "../../services/api/login";
import { logout as APILogout } from "../../services/api/logout";
import { register as APIRegister } from "../../services/api/register";
import { getUser } from "../../services/api/user";

export const useProvideAuth = () => {
  const [user, setUser] = React.useState<Object | null>(null);
  const [authStatus, setAuthStatus] = React.useState("pending");

  const login = async (credentials) => {
    const data = await APILogin(credentials);

    if (data.status === 200) {
      await fetchUser();
    }
    return data;
  };

  const register = (details) => {
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
      setUser(false);
      return data;
    });

  //   const forgot = async (details) => {
  //     const data = await APIForgot(details);
  //     return data;
  //   };

  //   const reset = async (details) => {
  //     const result = await APIReset(details);
  //     return result;
  //   };

  const fetchUser = async () => {
    if (user) return;
    await forceFetchUser();
  };

  const forceFetchUser = async () => {
    try {
      const user = await getUser();
      if (user.status !== 200) {
        setUser(false);
        return;
      }
      setUser(user.data.data);
    } catch (error) {
      setUser(false);
    }
  };

  React.useEffect(() => {
    fetchUser();
    return () => fetchUser();
  }, []);

  React.useEffect(() => {
    let mounted = true;

    if (mounted) {
      setAuthStatus(user ? "authenticated" : "unauthenticated");
    }
    return () => {
      mounted = false;
    };
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
