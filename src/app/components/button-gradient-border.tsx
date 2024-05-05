'use client'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'

const ButtonGradientBorder = ({
  onClick,
  children,
  className,
}: {
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'inline-block rounded-[9px] bg-gradient-to-r from-blue-500 to-purple-500 p-0.5',
        className,
      )}
    >
      <motion.button
        onClick={onClick}
        className="rounded-lg bg-white from-blue-500 to-purple-500 px-4 py-2 hover:bg-gradient-to-r hover:text-white dark:bg-black"
      >
        {children}
      </motion.button>
    </motion.div>
  )
}

export default ButtonGradientBorder
