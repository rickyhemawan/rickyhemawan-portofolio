'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CardReadMore from './card-read-more'
import CardReadLess from './card-read-less'

export interface Content {
  key: string
  content: React.ReactNode
}

// TODO: fix bug when "testing" content read more pressed, it will scroll down to next content
const CardsContainerV4 = ({ contents }: { contents: Content[] }) => {
  const [selectedContents, setSelectedContents] = useState<Content[]>([])

  const onReadMore = (content: Content) => {
    setSelectedContents([...selectedContents, content])
  }

  const onReadLess = (content: Content) => {
    const contents = selectedContents.filter(e => e.key !== content.key)
    setSelectedContents(contents)
  }

  return (
    <motion.div className="flex flex-wrap justify-center gap-2">
      <AnimatePresence>
        {contents.map(content => {
          if (selectedContents.map(e => e.key).includes(content?.key))
            return (
              <motion.div
                key={`selected-${content.key}`}
                className="w-full"
                initial={{ height: '0', opacity: 0 }}
                animate={{ height: '100%', opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.25, type: 'tween' }}
                layout
              >
                <CardReadLess onButtonClick={() => onReadLess(content)}>
                  {content?.content}
                </CardReadLess>
              </motion.div>
            )
          return (
            <motion.div
              key={content.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, type: 'tween' }}
              layout
              className="w-[calc(66.666%_-_4px)] md:w-[calc(33.333%_-_4px)] lg:w-[calc(25%_-_4px)]"
            >
              <CardReadMore onButtonClick={() => onReadMore(content)}>
                {content.content}
              </CardReadMore>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </motion.div>
  )
}

export default CardsContainerV4
