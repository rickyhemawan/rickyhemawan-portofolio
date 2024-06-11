import { cn } from '@/utils/cn'
import VerticalTimeline from './components/vertical-timeline'

const Career = ({ className }: { className?: string }) => {
  return (
    <div className={cn('', className)}>
      <VerticalTimeline />
    </div>
  )
}

export default Career
