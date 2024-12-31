import React, { useEffect, useRef } from 'react'

const keyIsAllow = (code: string): boolean => {
  return (
    code === 'Backspace' ||
    code === 'Space' ||
    code.startsWith('Key') ||
    code.startsWith('Digit')
  )
}

const useTyping = (
  enable: boolean,
): {
  typed: string
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
} => {
  const [typed, setTyped] = React.useState<string>('')
  const [index, setIndex] = React.useState<number>(0)
  const handleKeyDown = ({ key, code }: KeyboardEvent) => {
    console.log(`key=${key}, code=${code}`)
    if (!enable || !keyIsAllow(code)) return
    switch (key) {
      case 'Backspace':
        setTyped((prev) => prev.slice(0, -1))
        setIndex((prev) => prev - 1)
        break
      default:
        setTyped((prev) => prev + key)
        setIndex((prev) => prev + 1)
    }
  }
  const clearTyping = () => {
    setTyped('')
    setIndex(0)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return { typed, index, setIndex }
}

export default useTyping
