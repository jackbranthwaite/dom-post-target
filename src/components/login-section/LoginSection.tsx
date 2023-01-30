import React, { useState } from "react";
import { useProvideAuth } from "../../contexts/auth/useProvideAuth";
import { login } from "../../services/api/login";
import { logout } from "../../services/api/logout";
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import s from "./LoginSection.module.scss";
import { get } from "lodash";

export const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useProvideAuth();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const user = {
    email: email,
    password: password,
  };

  const loginUser = async () => {
    setProcessing(true);
    const status = await auth.login(user);

    if (get(status, "errors.email")) {
      setError(status.errors.email[0]);
    } else {
      setError(status.message);
    }

    setProcessing(false);
  };

  const signOut = async () => {
    return await logout();
  };

  return (
    <div className={s.LoginSectionContainer}>
      <Button processing={false} secondary={false} onClick={signOut}>
        Sign Out
      </Button>
      <div className={s.LoginSectionWrapper}>
        <h1 className={s.Title}>targle</h1>
        <TextInput
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target?.value)
          }
          type={"text"}
          title={"email"}
        />
        <TextInput
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          type={"password"}
          title={"password"}
        />
        <Button processing={processing} secondary={false} onClick={loginUser}>
          login
        </Button>
      </div>
    </div>
  );
};
