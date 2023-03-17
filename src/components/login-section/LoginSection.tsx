import React, { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import s from "./LoginSection.module.scss";
import { get } from "lodash";
import axios from "axios";
import { API } from "../../services/api/axios";
import { login } from "../../services/api/login";
import { logout } from "../../services/api/logout";
import { useProvideAuth } from "../../contexts/auth/useProvideAuth";
import { useRequireAuth } from "../../contexts/auth/useRequireAuth";

export const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const user = {
    email: email,
    password: password,
  };

  const handleLogin = async () => {
    await login(user);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className={s.LoginSectionContainer}>
      <Button
        processing={false}
        secondary={false}
        onClick={() => handleLogout()}
      >
        Sign Out
      </Button>
      <div className={s.LoginSectionWrapper}>
        <h1 className={s.Title}>target</h1>
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
        <Button processing={processing} secondary={false} onClick={handleLogin}>
          login
        </Button>
      </div>
    </div>
  );
};
