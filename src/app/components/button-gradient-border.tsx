'use client'
import { motion } from 'framer-motion'

const ButtonGradientBorder: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-0.5"
    >
      <motion.button className="rounded-lg bg-white from-blue-500 to-purple-500 px-4 py-2 hover:bg-gradient-to-r hover:text-white dark:bg-black">
        {children}
      </motion.button>
    </motion.div>
  )
}

export default ButtonGradientBorder
