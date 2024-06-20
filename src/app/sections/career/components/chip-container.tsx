import Chip from '@/app/components/chip'
import { useState } from 'react'

const ChipContainer = ({ children }: { children?: React.ReactNode }) => {
  const MAX_CHIP = 4
  const [isShowAll, setShowAll] = useState(false)
  const isChildrenArray = Array.isArray(children)

  if (!isChildrenArray || children.length <= MAX_CHIP) {
    return <div className="inline-block">{children}</div>
  }

  return isShowAll ? (
    <div className="inline-block">
      {children}
      <Chip className="bg-gradient-to-tr from-orange-500 to-yellow-300 text-black">
        <button onClick={() => setShowAll(false)}>
          -{children.length - MAX_CHIP}
        </button>
      </Chip>
    </div>
  ) : (
    <div className="inline-block">
      {children.slice(0, MAX_CHIP)}
      <Chip className="bg-gradient-to-tr from-orange-500 to-yellow-400 text-black">
        <button onClick={() => setShowAll(true)}>
          +{children.length - MAX_CHIP}
        </button>
      </Chip>
    </div>
  )
}

export default ChipContainer
