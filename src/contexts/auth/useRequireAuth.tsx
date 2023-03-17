import React, { useContext } from "react";

import { useRouter } from "next/router";
import { AuthContext } from "../AuthContext.js";

const useRequireAuth = (redirectUrl = "/login") => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (auth.user === false && router.pathname !== redirectUrl) {
        router.push(redirectUrl);
      }
    }
    return () => (mounted = false);
  }, [auth.user, router]);

  return auth;
};

export { useRequireAuth };
