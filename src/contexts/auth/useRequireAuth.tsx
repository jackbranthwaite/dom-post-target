import React from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function useRequireAuth(redirectUrl = "/sign-in") {
  const auth = React.useContext(AuthContext);
  const location = useLocation();
  const router = useNavigate();

  React.useEffect(() => {
    if (auth?.user === false && location.pathname !== redirectUrl) {
      router(redirectUrl);
    }
  }, [auth?.user, location]);

  return auth;
}

export { useRequireAuth };
