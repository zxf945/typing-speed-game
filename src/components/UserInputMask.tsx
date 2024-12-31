import { motion } from 'motion/react'

const Caret: React.FC = () => {
  return (
    <motion.span
      className="inline-block h-6 w-0.5 bg-yellow-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
    ></motion.span>
  )
}
const getCharacterClass = (input: string, expected: string): string => {
  if (expected === ' ') return 'bg-red-400'
  return input === expected ? 'text-green-500' : 'text-red-500'
}
const UserInputMask: React.FC<{
  className?: string
  value: string
  expected: string
}> = ({ className, value, expected }) => {
  return (
    <div className={`${className} text-break`}>
      {value.split('').map((input, index) => (
        <span
          key={`${input}-${index}`}
          className={getCharacterClass(input, expected[index])}
        >
          {expected[index]}
        </span>
      ))}
      <Caret />
    </div>
  )
}

export default UserInputMask
