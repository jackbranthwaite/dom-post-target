import React from "react";
import s from "./TextInput.module.scss";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ value, onChange }: InputProps) => {
  return (
    <div className={s.TextInputContainer}>
      <input
        type={"text"}
        className={s.Input}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
