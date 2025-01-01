import { faker } from '@faker-js/faker'
import { useCallback, useState } from 'react'
const generateWords = (initCount: number) => {
  return faker.word.words(initCount).toLocaleLowerCase()
}
const useWords = (
  initCount: number = 10,
): {
  words: string
  updateWords: () => void
} => {
  const [words, setWrods] = useState<string>(() => faker.word.words(initCount))

  const updateWords = useCallback(() => {
    setWrods(generateWords(initCount))
  }, [initCount])

  return { words, updateWords }
}

export default useWords
