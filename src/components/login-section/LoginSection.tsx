import React, { useState } from "react";
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import s from "./LoginSection.module.scss";

export const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email: email,
    password: password,
  };

  const loginUser = () => {
    console.log(user);
  };

  return (
    <div className={s.LoginSectionContainer}>
      <div className={s.LoginSectionWrapper}>
        <h1 className={s.Title}>tordle</h1>
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
        <Button onClick={loginUser}>login</Button>
      </div>
    </div>
  );
};
