import { motion } from 'motion/react'
const Result: React.FC<{
  className?: string
  accuracyPercent: string
  errors: number
  typed: number
}> = ({ className, accuracyPercent, errors, typed }) => {
  const initial = {
    opacity: 0,
  }
  const animate = {
    opacity: 1,
  }
  const transition = {
    duration: 0.3,
  }
  return (
    <motion.ul
      className={`${className} flex flex-col items-center text-primary-500`}
    >
      <motion.li initial={initial} animate={animate} transition={transition}>
        Results
      </motion.li>
      <motion.li
        className="text-green-500"
        initial={initial}
        animate={animate}
        transition={{ ...transition, delay: 0.2 }}
      >
        Accuracy:{accuracyPercent}
      </motion.li>
      <motion.li
        className="text-red-500"
        initial={initial}
        animate={animate}
        transition={{ ...transition, delay: 0.6 }}
      >
        Errors:{errors}
      </motion.li>
      <motion.li
        className="text-yellow-500"
        initial={initial}
        animate={animate}
        transition={{ ...transition, delay: 1 }}
      >
        Typed:{typed}
      </motion.li>
    </motion.ul>
  )
}

export default Result
