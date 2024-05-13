import achievementMDXs from '@/contents/achievements'
import CardsContainer from './components/cards-container'
import { cn } from '@/utils/cn'

const AchievementsSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn('', className)}>
      <h1>Achievements</h1>
      <CardsContainer contents={achievementMDXs} />
    </div>
  )
}

export default AchievementsSection
