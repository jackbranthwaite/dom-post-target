import React, { useEffect, useState } from 'react';
import { useRequireAuth } from '../../contexts/auth/useRequireAuth';
import { addLetters } from '../../services/api/add_letters';
import { getLetters } from '../../services/api/get_letters';
import { checkDictionary } from '../../services/dictionary/dictionary';
import { Button } from '../button/Button';
import { Target } from '../target/Target';
import { TextInput } from '../text-input/TextInput';
import { Timer } from '../timer/Timer';
import s from './HomeSection.module.scss';

export const HomeSection = () => {
  const [letters, setLetters] = useState('');
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [guessProcessing, setGuessProcessing] = useState(false);
  const [error, setError] = useState('');
  const [noLetters, setNoLetters] = useState(false);

  const requestLetters = async () => {
    const localLetters = await getLetters();
    if (localLetters?.data[0]) {
      setLetters(localLetters?.data[0].letters);
    } else {
      setNoLetters(true);
    }
  };

  useEffect(() => {
    requestLetters();
  }, []);

  const [newLetters, setNewLetters] = useState('');

  const auth = useRequireAuth();

  const checkGuess = () => {
    setError('');
    let localAnswer: Array<String> = [];
    let localGuess: Array<String> = [];

    for (let i = 0; i < letters.length; i++) {
      localAnswer.push(letters.charAt(i));
    }

    for (let i = 0; i < guess.length; i++) {
      localGuess.push(guess.charAt(i));
    }

    if (localAnswer.sort().join(',') === localGuess.sort().join(',')) {
      wordCheck();
    } else {
      setError("The letters don't match");
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

  useEffect(() => {
    if (guess.length < 1) {
      setError('');
    }
  }, [guess]);

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

        <Target word={letters} correct={correct} noLetters={noLetters} />

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
