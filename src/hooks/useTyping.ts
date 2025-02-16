import React, { useCallback, useEffect, useRef } from 'react'

const keyIsAllow = (code: string): boolean => {
  return (
    code === 'Backspace' ||
    code === 'Space' ||
    code.startsWith('Key') ||
    code.startsWith('Digit')
  )
}

const useTyping = (
  enable: boolean = true,
): {
  typed: string
  isEnableTyping: (enable: boolean) => void
  clearTyped: () => void
  totalTyped: number
} => {
  const [typed, setTyped] = React.useState<string>('')
  const totalTypedRef = useRef<number>(0)

  const handleKeyDown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      console.log(`key=${key}, code=${code}`)
      if (!enable || !keyIsAllow(code)) return
      switch (key) {
        case 'Backspace':
          setTyped((prev) => prev.slice(0, -1))
          totalTypedRef.current -= 1
          break
        default:
          setTyped((prev) => prev + key)
          totalTypedRef.current += 1
      }
    },
    [enable],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const isEnableTyping = (enable: boolean) => {
    if (enable) {
      window.addEventListener('keydown', handleKeyDown)
    } else {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }
  const clearTyped = () => {
    setTyped('')
  }
  return {
    typed,
    isEnableTyping,
    clearTyped,
    totalTyped: totalTypedRef.current,
  }
}

export default useTyping
