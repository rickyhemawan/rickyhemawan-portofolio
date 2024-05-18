'use client'
import { motion } from 'framer-motion'
const Anchors = () => {
  return (
    <div className="inline-flex gap-2">
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="https://github.com/rickyhemawan"
        rel="noopener noreferrer"
        target="_blank"
        className="rounded-full bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 p-1 text-white"
      >
        <motion.img
          src="/github-icon.svg"
          alt="An SVG of an eye"
          className="h-[2rem] w-[2rem] "
        />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="https://www.linkedin.com/in/ricky-hemawan/"
        rel="noopener noreferrer"
        target="_blank"
        className="rounded-full bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500"
      >
        <motion.img
          src="/linkedin-icon.svg"
          alt="An SVG of an eye"
          className="h-[2.5rem] w-[2.5rem]"
        />
      </motion.a>
    </div>
  )
}

export default Anchors
