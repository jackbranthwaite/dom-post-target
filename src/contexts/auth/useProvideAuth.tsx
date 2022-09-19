import React from "react";
import { login as APILogin } from "../../services/api/login";
import { logout as APILogout } from "../../services/api/logout";
import { register as APIRegister } from "../../services/api/register";
import { getUser } from "../../services/api/user";

export const useProvideAuth = () => {
  const [user, setUser] = React.useState(false);
  const [authStatus, setAuthStatus] = React.useState("pending");

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
      setUser(false);
      return data;
    });

  React.useEffect(() => {
    setAuthStatus(user ? "authenticated" : "unauthenticated");
  }, [user]);

  return {
    user,
    login,
    register,
    logout,
  };
};
