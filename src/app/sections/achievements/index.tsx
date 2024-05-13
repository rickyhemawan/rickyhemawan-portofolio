import achievementMDXs from '@/contents/achievements'
import CardsContainer from './components/cards-container'
import { cn } from '@/utils/cn'

const AchievementsSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn('', className)}>
      <CardsContainer contents={achievementMDXs} />
    </div>
  )
}

export default AchievementsSection
