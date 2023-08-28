import React from 'react'
import s from './Target.module.scss'
import { LetterItem } from './letter-item/LetterItem'

interface TargetProps {
  word: string
  correct: boolean
  noLetters: boolean
  addLetter: (e: string) => void
  reset: boolean
}

export const Target = ({
  word,
  correct,
  noLetters,
  addLetter,
  reset
}: TargetProps) => {
  const empty = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  if (!word) {
    return (
      <div className={s.NoWordWrapper}>
        <p className={s.NoWord}>
          There is currently no active word - come back later.
        </p>
      </div>
    )
  }

  return (
    <div className={s.TargetContainer}>
      {word.split('').map((letter, i) => {
        return (
          <LetterItem
            letter={letter}
            key={i}
            addLetter={(e) => addLetter(e)}
            reset={reset}
            correct={correct}
          />
        )
      })}
    </div>
  )
}
