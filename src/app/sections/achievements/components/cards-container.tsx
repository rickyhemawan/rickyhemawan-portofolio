'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CardReadMore from './card-read-more'
import CardReadLess from './card-read-less'
import { Content } from '@/contents'
import MdxLayout from '@/app/components/mdx-layout'

const CardsContainer = ({ contents }: { contents: Content[] }) => {
  const [selectedContents, setSelectedContents] = useState<Content[]>([])

  const onReadMore = (content: Content) => {
    setSelectedContents([...selectedContents, content])
  }

  const onReadLess = (content: Content) => {
    const contents = selectedContents.filter(e => e.key !== content.key)
    setSelectedContents(contents)
  }

  // sort selected contents to be on top
  const sortContents = (contents: Content[]) => {
    const selected = selectedContents.map(e => e.key)
    return [...contents].sort((a, b) => {
      if (selected.includes(a.key) && !selected.includes(b.key)) return -1
      if (!selected.includes(a.key) && selected.includes(b.key)) return 1
      return 0
    })
  }

  return (
    <motion.div className="flex flex-wrap justify-center gap-2">
      <AnimatePresence>
        {sortContents(contents).map(content => {
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
                  <MdxLayout>{content?.content}</MdxLayout>
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
                <MdxLayout>{content.content}</MdxLayout>
              </CardReadMore>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </motion.div>
  )
}

export default CardsContainer
