import React, { useEffect, useState } from "react";
import { Target } from "../target/Target";
import { TextInput } from "../text-input/TextInput";
import s from "./HomeSection.module.scss";

export const HomeSection = () => {
  const answer = "fabricate";
  const [guess, setGuess] = useState("");
  const [correct, setCorrect] = useState(false);

  const checkGuess = () => {
    if (guess === answer) {
      setCorrect(true);
    } else {
      console.log("Try again m8");
      setGuess("");
    }
  };

  return (
    <div className={s.HomeSectionContainer}>
      <div className={s.HomeSectionWrapper}>
        <h1 className={s.Title}>tordle</h1>

        <Target word={"arcebatfi"} answer={answer} correct={correct} />
        <p className={s.Statement}>
          there is at least one nine letter word - find one and stop your time
        </p>
        <TextInput
          value={guess}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGuess(e.target?.value)
          }
        />
        <button onClick={checkGuess} className={s.Button}>
          Check
        </button>
      </div>
    </div>
  );
};
