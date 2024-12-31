import { motion } from 'motion/react'

const CountDonwTimer: React.FC<{ timeLeft: number }> = ({ timeLeft }) => {
  return (
    <motion.h2
      className="mb-5 text-4xl font-medium text-green-500 dark:text-primary-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Time:{timeLeft}
    </motion.h2>
  )
}

export default CountDonwTimer
