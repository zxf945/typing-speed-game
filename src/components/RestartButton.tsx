import { MdRefresh } from 'react-icons/md'

const RestartButton: React.FC<{
  onRestart: () => void
  className?: string
}> = ({ onRestart: handleRestart, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur()
    handleRestart()
  }
  return (
    <button
      className={`block rounded px-8 py-2 text-primary-500 hover:bg-slate-700/50 ${className}`}
      onClick={handleClick}
    >
      <MdRefresh className="h-6 w-6" />
    </button>
  )
}
export default RestartButton
