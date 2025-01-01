const formatPercentage = (num: number) => `${num.toFixed(0)}%`

const countErrors = (typed: string, words: string) =>
  typed
    .split('')
    .reduce((count, char, i) => count + (char !== words[i] ? 1 : 0), 0)

// 计算正确率
const accuracyPercent = (correct: number, total: number) => {
  if (total === 0) return 0
  return formatPercentage((correct / total) * 100)
}

export { formatPercentage, countErrors, accuracyPercent }
