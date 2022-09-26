import React, { useState } from "react";
import { useProvideAuth } from "../../contexts/auth/useProvideAuth";
import { register } from "../../services/api/register";
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import s from "./RegisterSection.module.scss";

export const RegisterSection = () => {
  const auth = useProvideAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const user = {
    name: name,
    email: email,
    password: password,
    password_confirmation: passwordConfirmation,
  };

  const submitUser = () => {
    auth.register(user);
  };

  return (
    <div className={s.RegisterSectionContainer}>
      <div className={s.RegisterContainer}>
        <div className={s.TitleWrapper}>
          <h1 className={s.Title}>targle</h1>
        </div>
        <TextInput
          type={"text"}
          value={name}
          title={"name"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target?.value)
          }
        />
        <TextInput
          type={"text"}
          title={"email"}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target?.value)
          }
        />
        <TextInput
          type={"password"}
          title={"password"}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target?.value)
          }
        />
        <TextInput
          type={"password"}
          title={"confirm password"}
          value={passwordConfirmation}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordConfirmation(e.target?.value)
          }
        />
        <Button secondary={false} onClick={submitUser}>
          register
        </Button>
      </div>
    </div>
  );
};
