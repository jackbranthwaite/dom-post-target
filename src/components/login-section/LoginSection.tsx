import React, { useState } from "react";
import { useProvideAuth } from "../../contexts/auth/useProvideAuth";
import { login } from "../../services/api/login";
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import s from "./LoginSection.module.scss";

export const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useProvideAuth();

  const user = {
    email: email,
    password: password,
  };

  const loginUser = () => {
    auth.login(user);
  };

  return (
    <div className={s.LoginSectionContainer}>
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
        <Button secondary={false} onClick={loginUser}>
          login
        </Button>
      </div>
    </div>
  );
};
