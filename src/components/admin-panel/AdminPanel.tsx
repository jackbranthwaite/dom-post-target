import React, { ChangeEvent, useState } from 'react'
import { addLetters } from '../../services/api/add_letters'
import { Button } from '../button/Button'
import { TextInput } from '../text-input/TextInput'
import s from './AdminPanel.module.scss'
import { useRouter } from 'next/router'
import { AxiosResponse } from 'axios'

export const AdminPanel = () => {
  const [newLetters, setNewLetters] = useState('')
  const [addProcessing, setAddProcessing] = useState(false)
  const router = useRouter()

  const addLocalLetters = async () => {
    setAddProcessing(true)
    const letters = (await addLetters({
      letters: newLetters
    })) as AxiosResponse<any, any>
    if (letters?.status === 201) {
      setAddProcessing(false)
      router.push('/home')
    }
  }

  return (
    <div className={s.AdminContainer}>
      <div className={s.AdminWrapper}>
        <div className={s.TitleWrapper}>
          <h1 className={s.Title}>target</h1>
        </div>
        <TextInput
          title=""
          type="text"
          value={newLetters}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewLetters(e.target?.value)
          }
        />
        <Button
          secondary={false}
          onClick={addLocalLetters}
          processing={addProcessing}
        >
          Add
        </Button>
      </div>
    </div>
  )
}
