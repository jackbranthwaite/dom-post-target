import React, { useEffect, useState } from "react";
import { useRequireAuth } from "../../contexts/auth/useRequireAuth";
import { Button } from "../button/Button";
import { Target } from "../target/Target";
import { TextInput } from "../text-input/TextInput";
import { Timer } from "../timer/Timer";
import s from "./HomeSection.module.scss";

export const HomeSection = () => {
  const answer: string = "fabricate";
  const [guess, setGuess] = useState("");
  const [correct, setCorrect] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [guessProcessing, setGuessProcessing] = useState(false);

  const auth = useRequireAuth();

  const checkGuess = () => {
    if (guess === answer) {
      setCorrect(true);
    } else {
      console.log("Try again m8");
      setGuess("");
    }
  };
  let test: Array<String> = [];
  let testTwo: Array<String> = ["a", "b", "r", "i", "f", "t", "e", "c", "a"];

  for (let i = 0; i < answer.length; i++) {
    test.push(answer.charAt(i));
  }

  if (test.sort().join(",") === testTwo.sort().join(",")) {
    console.log("same members");
  } else console.log("not a match");

  return (
    <div className={s.HomeSectionContainer}>
      <div className={s.ButtonWrapper}>
        <Button secondary={true} onClick={auth.logout} processing={processing}>
          sign out
        </Button>
      </div>
      <div className={s.HomeSectionWrapper}>
        <div className={s.TitleWrapper}>
          <h1 className={s.Title}>target</h1>
          <Timer />
        </div>

        <Target word={"arcebatfi"} answer={answer} correct={correct} />

        <div className={s.ContentWrapper}>
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
          <Button
            secondary={false}
            onClick={checkGuess}
            processing={guessProcessing}
          >
            Check
          </Button>
        </div>
      </div>
    </div>
  );
};
