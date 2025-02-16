import { motion } from 'motion/react'
const caret = () => {
  return (
    <motion.span
      className="inline-block h-6 w-0.5 bg-yellow-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
    ></motion.span>
  )
}
export default caret
