import { cn } from '@/utils/cn'
import IntroductionText from '@/contents/introduction.mdx'
import { BackgroundBeams } from './components/background-beams'
import { Meteors } from './components/meteors'

const IntroductionSection = ({ className }: { className?: string }) => {
  return (
    <div>
      <div className={cn('flex flex-wrap justify-between', className)}>
        <div className="w-full md:w-[60%]">
          <h1 className="bg-gradient-to-r from-cyan-400 via-green-400 to-indigo-400 bg-clip-text text-5xl font-bold text-transparent">
            Ricky Hemawan
          </h1>
          <h2 className="bg-gradient-to-r from-cyan-400 via-green-400 to-indigo-400 bg-clip-text text-4xl text-transparent">
            Software Engineer
          </h2>
          <div className="my-12" />
          <div className="mx-1">
            <div className=" relative w-full">
              <div className="absolute inset-0 h-full w-full transform bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-[12px]" />
              <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-4 shadow-xl">
                <IntroductionText />
                <Meteors number={5} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[30%]"></div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default IntroductionSection
