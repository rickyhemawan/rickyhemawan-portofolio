import AchievementText from '@/contents/achievements.mdx'
import PlaceholderText from '@/contents/placeholder-text.mdx'
import MdxLayout from '@/app/components/mdx-layout'
import CardsContainerV2 from './components/cards-container-v2'
import CardsContainerV3 from './components/cards-container-v3'
import CardsContainerV4 from './components/cards-container-v4'
import { Content } from '@/contents'
import { cn } from '@/utils/cn'

const contents: Content[] = [
  { key: 'skillset-section-placeholder', content: <PlaceholderText /> },
  { key: 'skillset-section-testing', content: 'testing' },
  {
    key: 'skillset-section-achievement',
    content: (
      <MdxLayout>
        <AchievementText />
      </MdxLayout>
    ),
  },
]

const SkillsetSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn('', className)}>
      <h1 className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-4xl text-transparent">
        Skills (Maintenance)
      </h1>
      <div className="my-6" />
      <CardsContainerV4 contents={contents} />
    </div>
  )
}

export default SkillsetSection
