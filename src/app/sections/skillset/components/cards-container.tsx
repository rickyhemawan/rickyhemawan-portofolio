'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CardReadMore from './card-read-more'
import CardGradientBorder from '@/app/components/card-gradient-border'

export interface Content {
  key: string
  content: React.ReactNode
}

const CardsContainer = ({ contents }: { contents: Content[] }) => {
  const [content, setContent] = useState<Content | null>(null)

  const handleButtonClick = (content: Content) => {
    console.log('button clicked', content)
    setContent(content)
  }

  if (content !== null) {
    return (
      <div className="flex flex-wrap justify-center gap-2">
        <motion.div
          key={content.key}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ height: '18rem', overflow: 'hidden' }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <CardGradientBorder className="h-full">
              {content.content}
            </CardGradientBorder>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div className="flex flex-wrap justify-center gap-2">
      {contents.map(content => {
        return (
          <motion.div
            key={content.key}
            className="w-full max-w-[calc(66.666%_-_4px)] md:max-w-[calc(33.333%_-_4px)] lg:max-w-[calc(25%_-_4px)]"
          >
            <CardReadMore onButtonClick={() => handleButtonClick(content)}>
              {content.content}
            </CardReadMore>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default CardsContainer
