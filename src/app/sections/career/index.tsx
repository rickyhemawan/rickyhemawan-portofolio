import { cn } from '@/utils/cn'

const Career = ({ className }: { className?: string }) => {
  return (
    <div className={cn('', className)}>
      <h1 className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-4xl text-transparent">
        Journey (TBA)
      </h1>
      <div className="my-6" />
      <div className="h-72 w-full rounded-lg bg-gradient-to-tl from-blue-400 via-indigo-400 to-purple-400" />
    </div>
  )
}

export default Career
