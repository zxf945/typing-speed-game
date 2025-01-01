import { MdDarkMode } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import useDarkMode from '../hooks/useDarkMode'
import useSound from 'use-sound'
import lightOff from '../assets/light-off.mp3'
import lightON from '../assets//light-on.mp3'

const ModeSwitchButton: React.FC<{ className?: string }> = ({ className }) => {
  const [isDark, setIsDark] = useDarkMode()
  const [playDark] = useSound(lightOff)
  const [playLight] = useSound(lightON)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur() // 使用 currentTarget.blur() 移除焦点
    if (isDark) {
      playLight()
    } else {
      playDark()
    }
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
