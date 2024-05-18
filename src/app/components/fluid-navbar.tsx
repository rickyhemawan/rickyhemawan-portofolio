'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
const navigation: string[] = [
  'Skillset',
  'Stories',
  'Career',
  'Contact',
] as const

const FluidNavbar = () => {
  const [selected, setSelected] = useState(navigation[1])
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative">
        {/* <div className="absolute inset-y-[50%] left-[50%] -z-10 h-1 w-[98vw] -translate-x-[50%] transform rounded-full bg-gradient-to-r from-purple-700 via-cyan-600 to-blue-500" /> */}
        <div className="inline-flex rounded-full bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 p-1">
          <div className=" inline-flex w-auto flex-wrap rounded-full bg-black">
            {navigation.map(nav => {
              return (
                <div className="relative" key={nav}>
                  {nav == selected && (
                    <>
                      <motion.div
                        key="nav-selected"
                        layoutId="nav-selected"
                        className="text-md absolute inset-0 z-10 m-1.5 rounded-full bg-orange-600 px-3 py-2 font-bold text-transparent md:px-6 md:py-4 md:text-xl"
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
                      <div
                        key="nav-selected-2"
                        className="text-md absolute inset-0 z-20 px-3 py-2 font-bold text-white md:px-6 md:py-4 md:text-xl"
                      >
                        {nav}
                      </div>
                    </>
                  )}
                  <motion.button
                    className="text-md cursor-pointer rounded-full px-3 py-2 font-bold text-white md:px-6 md:py-4 md:text-xl"
                    layoutId={nav}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, type: 'spring' }}
                    onClick={() => setSelected(nav)}
                    whileHover={{
                      backgroundColor: 'white',
                      color: 'black',
                      scale: 1.1,
                      opacity: 0.8,
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
    </div>
  )
}

export default FluidNavbar
