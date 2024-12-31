import { useEffect, useRef, useState } from 'react'

const useCountTimer = (
  initialCount: number = 30,
): {
  leftTime: number
  resetTimer: () => void
  startTimer: () => void
} => {
  const [leftTime, setLeftTime] = useState(initialCount)
  const timerRef = useRef<number>()
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setLeftTime((prevCount) => prevCount - 1)
    }, 1000)
  }

  useEffect(() => {
    if (leftTime === 0) {
      clearInterval(timerRef.current)
    }
  }, [leftTime])

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    setLeftTime(initialCount)
  }

  return { leftTime, resetTimer, startTimer }
}
export default useCountTimer
