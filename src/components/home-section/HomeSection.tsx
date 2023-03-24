import React, { useEffect, useState } from 'react';
import { useRequireAuth } from '../../contexts/auth/useRequireAuth';
import {
  checkDictionary,
  Dictionary,
} from '../../services/dictionary/dictionary';
import { Button } from '../button/Button';
import { Target } from '../target/Target';
import { TextInput } from '../text-input/TextInput';
import { Timer } from '../timer/Timer';
import s from './HomeSection.module.scss';

export const HomeSection = () => {
  const answer: string = 'fabricate';
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [guessProcessing, setGuessProcessing] = useState(false);
  const [error, setError] = useState('');

  const auth = useRequireAuth();

  const checkGuess = () => {
    let localAnswer: Array<String> = [];
    let localGuess: Array<String> = [];

    for (let i = 0; i < answer.length; i++) {
      localAnswer.push(answer.charAt(i));
    }

    for (let i = 0; i < guess.length; i++) {
      localGuess.push(guess.charAt(i));
    }

    if (localAnswer.sort().join(',') === localGuess.sort().join(',')) {
      wordCheck();
    } else {
      setError('The letters you entered do not match the letters given');
    }
  };

  const wordCheck = async () => {
    const word = await checkDictionary(guess);
    if (word.status === 200) {
      setCorrect(true);
    } else {
      setError("That's not a word sorry!");
    }
  };

  useEffect(() => {}, []);

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

        <Target word={'arcebatfi'} answer={answer} correct={correct} />

        <div className={s.ContentWrapper}>
          <p className={s.Statement}>
            there is at least one nine letter word - find one and stop your time
          </p>

          <TextInput
            title=''
            type='text'
            value={guess}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setGuess(e.target?.value)
            }
          />

          <div className={s.ErrorWrapper}>
            {error && <p className={s.ErrorText}>{error}</p>}
          </div>

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
