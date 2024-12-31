const formatPercentage = (num: number) => `${num.toFixed(0)}%`

const countErrors = (typed: string, words: string) =>
  typed
    .split('')
    .reduce((count, char, i) => count + (char !== words[i] ? 1 : 0), 0)

export { formatPercentage, countErrors }
