import { useEffect, useRef, useState } from 'react'

const useCountTimer = (
  initialCount: number = 30,
): {
  leftTime: number
  resetTimer: () => void
  startTimer: () => void
  clearTimer: () => void
} => {
  const [leftTime, setLeftTime] = useState(initialCount)
  // 组件中共享数据
  const timerRef = useRef<number>()
  const startTimer = () => {
    if (timerRef.current) return
    timerRef.current = setInterval(() => {
      setLeftTime((prevCount) => prevCount - 1)
    }, 1000)
  }
  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(timerRef.current)
      timerRef.current = undefined
    }
  }, [])
  // 异步监听
  useEffect(() => {
    if (leftTime === 0) {
      clearInterval(timerRef.current)
      timerRef.current = undefined
    }
  }, [leftTime])

  const resetTimer = () => {
    clearTimer()
    setLeftTime(initialCount)
    startTimer()
  }
  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = undefined
    }
  }

  return { leftTime, resetTimer, startTimer, clearTimer }
}
export default useCountTimer
