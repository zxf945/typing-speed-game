import { faker } from '@faker-js/faker'
import { useCallback, useState } from 'react'
const useWords = (
  count: number = 10,
): {
  words: string
  updateWords: () => void
} => {
  const [words, setWrods] = useState<string>(() => faker.word.words(count))
  const updateWords = useCallback(() => {
    setWrods(faker.word.words(count))
  }, [count])

  return { words, updateWords }
}

export default useWords
