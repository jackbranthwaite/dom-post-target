import React, { useState } from "react";
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import s from "./LoginSection.module.scss";
import { get } from "lodash";

export const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const user = {
    email: email,
    password: password,
  };

  return (
    <div className={s.LoginSectionContainer}>
      <Button
        processing={false}
        secondary={false}
        onClick={() => console.log("Logout")}
      >
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
        <Button
          processing={processing}
          secondary={false}
          onClick={() => console.log("Login")}
        >
          login
        </Button>
      </div>
    </div>
  );
};
