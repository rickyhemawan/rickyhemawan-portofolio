import { cn } from '@/utils/cn'
import ShortIntroductionText from '@/contents/introductions/short.mdx'
import ExtraIntroductionText from '@/contents/introductions/extra.mdx'
import { BackgroundBeams } from './components/background-beams'
import ExpandableCard from './components/expandable-card'
import MdxLayout from '@/app/components/mdx-layout'
import Anchors from './components/anchors'

const IntroductionSection = ({ className }: { className?: string }) => {
  return (
    <div>
      <div className={cn('flex flex-wrap justify-between', className)}>
        <div className="w-full md:w-[60%]">
          <h1 className="bg-gradient-to-r from-cyan-400 via-green-400 to-indigo-400 bg-clip-text text-5xl font-bold text-transparent">
            Ricky Hemawan
          </h1>
          <div className="my-0.5" />
          <div className="flex flex-row flex-wrap gap-4">
            <h2 className="bg-gradient-to-r from-cyan-400 via-green-400 to-indigo-400 bg-clip-text text-4xl text-transparent">
              Software Engineer
            </h2>
            <Anchors />
          </div>
          <div className="my-12" />
          <div className="mx-1">
            <ExpandableCard expandedChildren={<ExtraIntroductionText />}>
              <ShortIntroductionText />
            </ExpandableCard>
          </div>
        </div>
        <div className="w-full md:w-[30%]"></div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default IntroductionSection
