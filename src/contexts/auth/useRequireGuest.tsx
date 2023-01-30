import React from "react";
import { Router, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../AuthContext.js";

function useRequireGuest(redirectUrl = "/home") {
  const auth = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (
      auth?.authStatus === "authenticated" &&
      location.pathname !== redirectUrl
    ) {
      navigate(redirectUrl);
    }
  }, [auth?.authStatus, location]);

  return auth;
}

export { useRequireGuest };
