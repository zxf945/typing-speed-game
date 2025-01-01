import './App.css'
import RestartButton from './components/RestartButton'
import useWords from './hooks/userWords'
import { countErrors } from './utils/helpers'
import Result from './components/Result'
import CountDonwTimer from './components/CountDonwTimer'
import UserInputMask from './components/UserInputMask'

import Words from './components/Words'
import ModeSwitchButton from './components/ModeSwitchButton'
import useCountTimer from './hooks/useCountTimer'
import useTyping from './hooks/useTyping'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const NUMBER_OF_WORDS = 10
const NUMBER_OF_TIMER = 30

export default function App() {
  const { words, updateWords } = useWords(NUMBER_OF_WORDS)
  const { leftTime, resetTimer } = useCountTimer(NUMBER_OF_TIMER)
  const { typed, isEnableTyping, clearTyped, totalTyped } = useTyping()
  // useEffect(() => {
  //   console.log('===111')
  // }, [])
  useEffect(() => {
    if (typed.length === words.length) {
      clearTyped()
      updateWords()
    }
    if (leftTime === 0) {
      isEnableTyping(false)
    }
  }, [typed, leftTime])
  return (
    <div className="relative flex min-h-screen flex-col justify-center">
      <Toaster />
      <ModeSwitchButton className="absolute right-4 top-4" />
      <CountDonwTimer timeLeft={leftTime} />
      <div className="relative text-4xl">
        <Words words={words} />
        <UserInputMask
          className="absolute inset-0"
          value={typed}
          expected={words}
        />
      </div>

      <RestartButton
        className="align-center mx-auto mt-10"
        onRestart={() => {
          resetTimer()
          clearTyped()
          updateWords()
          isEnableTyping(true)
        }}
      />
      <Result
        className="mt-10"
        errors={countErrors(typed, words)}
        typed={totalTyped}
      />
    </div>
  )
}
