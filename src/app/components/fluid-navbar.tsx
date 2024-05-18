'use client'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import { useState } from 'react'
const navigation: string[] = ['Skillset', 'Stories', 'Journey'] as const

const FluidNavbar = ({
  className,
  onNavbarValueChanged,
}: {
  className?: string
  onNavbarValueChanged?: (value: string) => void
}) => {
  const [selected, setSelected] = useState(navigation[1])
  return (
    <div className={cn('flex w-full items-center justify-center', className)}>
      <div className="inline-flex rounded-full bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 p-[3px]">
        <div className=" inline-flex w-auto flex-wrap rounded-full bg-black">
          {navigation.map(nav => {
            return (
              <div className="relative" key={nav}>
                {nav == selected && (
                  <>
                    <motion.div
                      key="nav-selected"
                      layoutId="nav-selected"
                      className="
                          text-md 
                          absolute inset-0 z-10 
                          m-[4.5px] 
                          rounded-full 
                          
                          bg-gradient-to-r 
                          from-orange-500 
                          to-yellow-400 
                          px-3 py-2 
                          font-bold 
                          text-transparent 
                          
                          md:px-6 md:py-4 md:text-xl
                        "
                      animate={{
                        scaleX: [1, 1.2, 1],
                        scaleY: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 0.5,
                        times: [0, 0.75, 1],
                      }}
                      layout
                    >
                      {nav}
                    </motion.div>
                    <motion.div
                      key="nav-selected-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="
                          text-md 
                          absolute inset-0 z-20 
                          px-3 py-2 
                          font-bold text-black 
                          md:px-6 md:py-4 md:text-xl
                        "
                    >
                      {nav}
                    </motion.div>
                  </>
                )}
                <motion.button
                  className="
                      text-md 
                      cursor-pointer 
                      rounded-full px-3 
                      py-2 font-bold 
                      
                      text-white 
                      hover:bg-gradient-to-br 
                      hover:from-orange-400 
                      hover:to-yellow-400 
                      hover:bg-clip-text 
                      hover:text-transparent 
                      hover:transition-colors 
                      hover:duration-500 
                      
                      hover:ease-in-out md:px-6 md:py-4
                      md:text-xl
                    "
                  layoutId={nav}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  onClick={() => {
                    setSelected(nav)
                    // wait for the animation to finish
                    setTimeout(() => {
                      onNavbarValueChanged?.(nav)
                    }, 500)
                  }}
                  layout
                >
                  {nav}
                </motion.button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FluidNavbar
