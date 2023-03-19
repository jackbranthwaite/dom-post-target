import { useRouter } from "next/router";
import React, { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const context: any = useContext(AuthContext);
  const router = useRouter();

  React.useEffect(() => {
    if (context.user === null) {
      return;
    }

    if (context.user === false) {
      router.push("/login");
    }

    if (context.user) {
      router.push("/home");
    }
  }, [context.user]);

  return <></>;
};

export default Home;
