import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../AuthContext";

export const useRequireAuth = (redirectUrl = "/login") => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
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
