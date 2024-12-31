import './App.css'
import RestartButton from './components/RestartButton'
import useWords from './hooks/userWords'
import { countErrors, formatPercentage } from './utils/helpers'
import Result from './components/Result'
import CountDonwTimer from './components/CountDonwTimer'
import UserInputMask from './components/UserInputMask'

import Words from './components/Words'
import ModeSwitchButton from './components/ModeSwitchButton'
import useCountTimer from './hooks/useCountTimer'
import useTyping from './hooks/useTyping'
import useTypeState from './hooks/useTypeState'

export default function App() {
  const { words } = useWords(10)
  const { typeState } = useTypeState('start')
  const { leftTime, resetTimer } = useCountTimer(10)
  const { typed } = useTyping(typeState != 'finish')
  return (
    <div className="relative flex min-h-screen flex-col justify-center">
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
        onRestart={() => resetTimer()}
      />
      <Result
        className="mt-10"
        accuracyPercent={formatPercentage(100)}
        errors={countErrors(typed, words)}
        typed={typed.length}
      />
    </div>
  )
}
