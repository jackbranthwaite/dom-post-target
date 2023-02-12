import React, { useState } from "react";
import { register } from "../../services/api/register";
import { Button } from "../button/Button";
import { TextInput } from "../text-input/TextInput";
import s from "./RegisterSection.module.scss";

export const RegisterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [processing, setProcessing] = useState(false);

  const user = {
    name: name,
    email: email,
    password: password,
    password_confirmation: passwordConfirmation,
  };

  const handleRegister = async () => {
    await register(user);
  };

  return (
    <div className={s.RegisterSectionContainer}>
      <div className={s.RegisterContainer}>
        <div className={s.TitleWrapper}>
          <h1 className={s.Title}>target</h1>
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
        <Button
          secondary={false}
          onClick={() => handleRegister()}
          processing={processing}
        >
          register
        </Button>
      </div>
    </div>
  );
};
