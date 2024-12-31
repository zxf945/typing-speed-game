import { MdDarkMode } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import useDarkMode from '../hooks/useDarkMode'
const ModeSwitchButton: React.FC<{ className?: string }> = ({ className }) => {
  const [isDark, setIsDark] = useDarkMode()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur() // 使用 currentTarget.blur() 移除焦点
    setIsDark((prev) => !prev)
  }
  return (
    <button onClick={handleClick} className={`${className}`}>
      {isDark ? (
        <MdDarkMode className="h-8 w-8 dark:text-slate-400" />
      ) : (
        <CiLight className="h-8 w-8" />
      )}
    </button>
  )
}

export default ModeSwitchButton
