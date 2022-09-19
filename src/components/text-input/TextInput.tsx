import React from "react";
import s from "./TextInput.module.scss";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  title: string;
}

export const TextInput = ({ value, onChange, type, title }: InputProps) => {
  return (
    <div className={s.TextInputContainer}>
      <p className={s.Title}>{title}</p>
      <input
        type={type}
        className={s.Input}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
