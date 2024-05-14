'use client'

import { cn } from '@/utils/cn'
import { Meteors } from './meteors'
import { animate, motion } from 'framer-motion'
import { ArrowRightCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const ExpandableCard = ({
  children,
  expandedChildren,
  className,
}: {
  expandedChildren?: React.ReactNode
  children?: React.ReactNode
  className?: string
}) => {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <motion.div
      transition={{
        duration: 0.25,
        type: 'tween',
      }}
      className="relative w-full"
      layout
    >
      <motion.div
        className="
            absolute inset-0 h-full w-full transform 
            bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 
            blur-[12px]
          "
        transition={{
          delay: 0.02,
          duration: 0.25,
          type: 'tween',
        }}
        layout
      />
      <div
        className="
            relative flex h-full flex-col items-start justify-end overflow-hidden 
            rounded-2xl 
            border border-gray-800 bg-gray-900 
            shadow-xl
          "
      >
        <div className={cn('p-4', className)}>
          <motion.div layout>{children}</motion.div>
          <motion.div layout>{isExpanded && expandedChildren}</motion.div>

          <div className="flex flex-wrap justify-end ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="
            rounded-full border border-gray-500 p-1 text-gray-300 hover:bg-gray-800
            hover:text-white
            "
              onClick={() => setExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <XCircleIcon className="h-5 w-5" />
              ) : (
                <ArrowRightCircleIcon className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>
        <Meteors number={5} />
      </div>
    </motion.div>
  )
}

export default ExpandableCard
