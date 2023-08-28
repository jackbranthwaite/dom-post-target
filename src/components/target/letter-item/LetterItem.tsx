import React, { useEffect, useRef, useState } from 'react'
import s from './LetterItem.module.scss'
import { gsap } from 'gsap'

export const LetterItem = ({
  letter,
  addLetter,
  reset,
  correct
}: {
  letter: string
  addLetter: (e: string) => void
  reset: boolean
  correct: boolean
}) => {
  const [used, setUsed] = useState(false)
  const letterRef = useRef(null)

  const useLetter = () => {
    if (!used) {
      animateClick()
      addLetter(letter)
    } else {
      return
    }
  }

  const animateOut = () => {
    gsap.to(letterRef.current, {
      backgroundColor: 'transparent',
      duration: 0.5,
      onComplete: () => setUsed(false)
    })
  }
  useEffect(() => {
    if (reset) {
      animateOut()
    }
  }, [reset])

  const animateClick = () => {
    if (letterRef.current) {
      gsap.to(letterRef.current, {
        backgroundColor: 'rgba(255, 255, 0, 0.2)',
        duration: 0.5,
        onComplete: () => setUsed(true)
      })
    }
  }

  const correctAnimation = () => {
    if (letterRef.current) {
      gsap.to(letterRef.current, {
        backgroundColor: 'rgba(0, 270, 0, 0.2)',
        duration: 0.5
      })
    }
  }

  useEffect(() => {
    let mounted = true
    if (mounted) {
      if (correct) {
        correctAnimation()
      }
    }
    return () => {
      mounted = false
    }
  }, [correct])

  return (
    <div
      className={s.LetterBox}
      key={letter}
      onClick={() => useLetter()}
      ref={letterRef}
    >
      <p className={s.Letter}>{letter}</p>
    </div>
  )
}
