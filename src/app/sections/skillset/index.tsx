import AchievementText from '@/contents/achievements.mdx'
import PlaceholderText from '@/contents/placeholder-text.mdx'
import CardsContainer, { Content } from './components/cards-container'
import MdxLayout from '@/app/components/mdx-layout'

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

const SkillsetSection = () => {
  return <CardsContainer contents={contents} />
}

export default SkillsetSection
