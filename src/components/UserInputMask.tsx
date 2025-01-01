import useSound from 'use-sound'
import Caret from './Caret'
import keyboardStroke from '../assets/keyboard_stroke.wav'
import typingError from '../assets/typing-error.wav'

import { useEffect } from 'react'

const UserInputMask: React.FC<{
  className?: string
  value: string
  expected: string
}> = ({ className, value, expected }) => {
  return (
    <div className={`${className} text-break`}>
      {value.split('').map((input, index) => (
        <Character actual={input} expected={expected[index]} />
      ))}
      <Caret />
    </div>
  )
}

const Character = ({
  actual,
  expected,
}: {
  actual: string
  expected: string
}) => {
  const isCorrect = actual === expected
  const isWhiteSpace = expected === ' '
  const [playStroke] = useSound(keyboardStroke, { volume: 0.5 })
  const [playError] = useSound(typingError, { volume: 0.5 })
  useEffect(() => {
    if (isCorrect) {
      playStroke()
    } else {
      playError()
    }
  }, [playStroke, playError, isCorrect])
  return (
    <span
      className={cn({
        'text-red-500': !isCorrect && !isWhiteSpace,
        'text-green-500': isCorrect && !isWhiteSpace,
        'bg-red-500/50': !isCorrect && isWhiteSpace,
        'dark:text-red-500': !isCorrect && !isWhiteSpace,
        'dark:text-primary-500': isCorrect && !isWhiteSpace,
        'dark:bg-red-500/50': !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  )
}
const cn = (classes: { [key: string]: boolean }) => {
  return Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ')
}

export default UserInputMask
