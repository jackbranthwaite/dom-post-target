import React, { useEffect, useState } from "react";
import { useProvideAuth } from "../../contexts/auth/useProvideAuth";
import { logout } from "../../services/api/logout";
import { Button } from "../button/Button";
import { Target } from "../target/Target";
import { TextInput } from "../text-input/TextInput";
import { Timer } from "../timer/Timer";
import s from "./HomeSection.module.scss";

export const HomeSection = () => {
  const answer = "fabricate";
  const auth = useProvideAuth();
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
      <div className={s.ButtonWrapper}>
        <Button secondary={true} onClick={auth.logout}>
          sign out
        </Button>
      </div>
      <div className={s.HomeSectionWrapper}>
        <div className={s.TitleWrapper}>
          <h1 className={s.Title}>tordle</h1>
          <Timer />
        </div>

        <Target word={"arcebatfi"} answer={answer} correct={correct} />
        <p className={s.Statement}>
          there is at least one nine letter word - find one and stop your time
        </p>
        <TextInput
          title=""
          type="text"
          value={guess}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGuess(e.target?.value)
          }
        />
        <Button secondary={false} onClick={checkGuess}>
          Check
        </Button>
      </div>
    </div>
  );
};
