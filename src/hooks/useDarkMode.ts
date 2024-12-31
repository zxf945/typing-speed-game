import { useEffect, useState } from 'react'
const matchDark = '(prefers-color-scheme: dark)'

const useDarkMode = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] => {
  const [isDark, setIsDark] = useState<boolean>(
    window.matchMedia(matchDark).matches,
  )
  useEffect(() => {
    const media = window.matchMedia(matchDark)
    const handler = () => setIsDark(media.matches)
    media.addEventListener('change', handler)
    // 下一次组件挂载，才执行
    return () => media.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])
  return [isDark, setIsDark]
}
export default useDarkMode
