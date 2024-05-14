'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CardReadMore from './card-read-more'
import CardReadLess from './card-read-less'
import { Content } from '@/contents'
import MdxLayout from '@/app/components/mdx-layout'
import ButtonGradientBorder from '@/app/components/button-gradient-border'
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/16/solid'

const CardsContainer = ({ contents }: { contents: Content[] }) => {
  const [selectedContents, setSelectedContents] = useState<Content[]>([])

  const onReadMore = (content: Content) => {
    setSelectedContents([...selectedContents, content])
  }

  const onReadLess = (content: Content) => {
    const contents = selectedContents.filter(e => e.key !== content.key)
    setSelectedContents(contents)
  }

  const onExpandAll = () => {
    setSelectedContents(() => [...contents])
  }

  const onCollapseAll = () => {
    setSelectedContents(() => [])
  }

  // sort selected contents to be on top (only for non mobile view)
  const sortContents = (contents: Content[]) => {
    if (typeof window !== 'undefined' && window?.innerWidth < 768) {
      return contents
    }
    const selected = selectedContents.map(e => e.key)
    return [...contents].sort((a, b) => {
      if (selected.includes(a.key) && !selected.includes(b.key)) return -1
      if (!selected.includes(a.key) && selected.includes(b.key)) return 1
      return 0
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="flex w-full flex-wrap justify-between">
        <h1 className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-4xl text-transparent">
          Stories
        </h1>
        {selectedContents.length > 0 ? (
          <ButtonGradientBorder className="p-0" onClick={onCollapseAll}>
            <div className="px-2 py-2">
              <ArrowsPointingInIcon className="h-6 w-6 text-white" />
            </div>
          </ButtonGradientBorder>
        ) : (
          <ButtonGradientBorder className="p-0" onClick={onExpandAll}>
            <div className="px-2 py-2">
              <ArrowsPointingOutIcon className="h-6 w-6 text-white" />
            </div>
          </ButtonGradientBorder>
        )}
      </div>

      <div className="my-12" />
      <motion.div className="flex flex-wrap justify-center gap-2">
        <AnimatePresence>
          {sortContents(contents).map(content => {
            if (selectedContents.map(e => e.key).includes(content?.key))
              return (
                <motion.div
                  key={`selected-${content.key}`}
                  className="w-full"
                  initial={{ height: '18rem', opacity: 0 }}
                  animate={{ height: '100%', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
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
                className="w-[calc(100%_-_4px)] md:w-[calc(50%_-_4px)] lg:w-[calc(33%_-_4px)]"
              >
                <CardReadMore onButtonClick={() => onReadMore(content)}>
                  <MdxLayout>{content.content}</MdxLayout>
                </CardReadMore>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default CardsContainer
