'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CardReadMore from './card-read-more'
import CardGradientBorder from '@/app/components/card-gradient-border'

export interface Content {
  key: string
  content: React.ReactNode
}

// TODO: fix bug when "testing" content read more pressed, it will scroll down to next content
const CardsContainer = ({ contents }: { contents: Content[] }) => {
  const [content, setContent] = useState<Content | null>(null)

  const handleButtonClick = (content: Content) => {
    setContent(content)
  }

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-2"
      style={{ originX: 0 }}
    >
      <AnimatePresence>
        {content === null ? (
          contents.map(content => {
            return (
              <motion.div
                key={content.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[calc(66.666%_-_4px)] md:max-w-[calc(33.333%_-_4px)] lg:max-w-[calc(25%_-_4px)]"
              >
                <CardReadMore onButtonClick={() => handleButtonClick(content)}>
                  {content.content}
                </CardReadMore>
              </motion.div>
            )
          })
        ) : (
          <motion.div
            key={`selected-${content.key}`}
            className="w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100%', opacity: 1 }}
            transition={{ duration: 1, type: 'tween' }}
          >
            <CardGradientBorder className="h-full w-full">
              <div className="min-h-8">{content?.content}</div>
            </CardGradientBorder>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default CardsContainer
