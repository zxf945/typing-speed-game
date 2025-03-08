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
import { memo, useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'

const NUMBER_OF_WORDS = 10
const NUMBER_OF_TIMER = 10

const App = () => {
  const { words, updateWords } = useWords(NUMBER_OF_WORDS)
  const { leftTime, resetTimer, clearTimer } = useCountTimer(NUMBER_OF_TIMER)
  const { typed, isEnableTyping, clearTyped, totalTyped } = useTyping()
  useEffect(() => {
    if (typed.length === words.length) {
      clearTyped()
      updateWords()
    }
  }, [words.length, clearTyped, updateWords, typed.length])
  useEffect(() => {
    if (leftTime === 0) {
      isEnableTyping(false)
      toast('game over')
      clearTimer()
    }
  }, [isEnableTyping, leftTime, clearTimer])
  return (
    <div className="relative flex min-h-screen flex-col justify-center">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <ModeSwitchButton className="absolute top-4 right-4" />
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
export default memo(App)
