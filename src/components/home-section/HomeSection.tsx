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
import { SignOut } from '../sign-out/SignOut';
import { checkComplete, submitTime } from '../../services/api/submit_correct';
import { LoadingSpinner } from '../loading-page/LoadingPage';

interface ICompleted {
  hours: string;
  minutes: string;
  seconds: string;
  guess: string;
}

export const HomeSection = () => {
  const [letters, setLetters] = useState('');
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(false);
  const [processing, setProcessing] = useState(true);
  const [guessProcessing, setGuessProcessing] = useState(false);
  const [error, setError] = useState('');
  const [noLetters, setNoLetters] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    hours: '',
    minutes: '',
    seconds: '',
  });
  const [completed, setCompleted] = useState<ICompleted>();
  const [reset, setReset] = useState(false);

  const requestLetters = async () => {
    const localLetters = await getLetters();
    if (localLetters?.data[0]) {
      setLetters(localLetters?.data[0].letters);
    } else {
      setNoLetters(true);
    }
  };

  const alreadyComplete = async () => {
    const check = await checkComplete();
    if (check?.data[0]) {
      console.log(check.data[0]);
      setCompleted(check?.data[0]);
      setCorrect(true);
      setProcessing(false);
    } else {
      setProcessing(false);
    }
  };

  useEffect(() => {
    requestLetters();
    alreadyComplete();
  }, []);

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
      await submitTime({
        hours: 24 - parseInt(currentTime.hours),
        minutes: 60 - parseInt(currentTime.minutes),
        seconds: 60 - parseInt(currentTime.seconds),
        guess: guess,
      });
      setCorrect(true);
      alreadyComplete();
    } else {
      setError("That's not a word sorry!");
    }
  };

  useEffect(() => {
    if (guess.length < 1) {
      setError('');
    }
  }, [guess]);

  useEffect(() => {
    if (reset) {
      setGuess('');
      setTimeout(() => {
        setReset(false);
      }, 2);
    }
  }, [reset]);

  if (processing)
    return (
      <>
        <LoadingSpinner />
      </>
    );
  return (
    <div className={s.HomeSectionContainer}>
      <SignOut />
      <div className={s.HomeSectionWrapper}>
        <div className={s.TitleWrapper}>
          <h1 className={s.Title}>target</h1>
          {!completed && <Timer currentTime={(e: any) => setCurrentTime(e)} />}
        </div>

        <Target
          word={letters}
          correct={correct}
          noLetters={noLetters}
          addLetter={(e) => setGuess(guess + e)}
          reset={reset}
        />

        {!completed && (
          <div className={s.ContentWrapper}>
            <h1 className={s.CurrentWord}>{guess}</h1>
            <p className={s.Statement}>
              there is at least one nine letter word - find one and stop your
              time
            </p>

            <div className={s.Buttons}>
              <Button
                onClick={() => setReset(true)}
                processing={false}
                secondary={false}
              >
                clear
              </Button>
              <Button secondary={false} onClick={checkGuess} processing={false}>
                check
              </Button>
            </div>
            <div className={s.ErrorWrapper}>
              {error && <p className={s.ErrorText}>{error}</p>}
            </div>

            <div className={s.CorrectWrapper}>
              {correct && <p className={s.CorrectText}>correct!</p>}
            </div>
          </div>
        )}
        {correct && completed && (
          <div className={s.ContentWrapper}>
            <h1 className={s.CurrentWord}>{completed.guess}</h1>
            <p className={s.TimeTaken}>
              time: {completed.hours}:{completed.minutes}:{completed.seconds}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
