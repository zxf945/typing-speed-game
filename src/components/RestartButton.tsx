import { MdRefresh } from 'react-icons/md'

export default function RestartButton({
  onRestart: handleRestart,
  className,
}: {
  onRestart: () => void
  className?: string
}) {
  return (
    <button
      className={`hover: block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
      onClick={handleRestart}
    >
      <MdRefresh className="h-6 w-6" />
    </button>
  )
}
