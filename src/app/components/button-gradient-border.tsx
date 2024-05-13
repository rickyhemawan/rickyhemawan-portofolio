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
        'inline-block rounded-[9px] bg-gradient-to-r from-blue-700 to-purple-700 p-0.5 dark:from-blue-500 dark:to-purple-500',
        className,
      )}
    >
      <motion.button
        onClick={onClick}
        className="rounded-lg bg-white from-blue-700 to-purple-700 hover:bg-gradient-to-r hover:text-white dark:bg-black dark:from-blue-500 dark:to-purple-500"
      >
        {children}
      </motion.button>
    </motion.div>
  )
}

export default ButtonGradientBorder
