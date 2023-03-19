import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";

function useRequireGuest(redirectUrl = "/home") {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (
      auth.authStatus === "authenticated" &&
      router.pathname !== redirectUrl
    ) {
      router.push(redirectUrl);
    }
  }, [auth.authStatus, router]);

  return auth;
}

export { useRequireGuest };
