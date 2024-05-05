import AchievementText from '@/contents/achievements.mdx'
import PlaceholderText from '@/contents/placeholder-text.mdx'
import CardsContainer, { Content } from './components/cards-container'
import MdxLayout from '@/app/components/mdx-layout'
import CardsContainerV2 from './components/cards-container-v2'
import CardsContainerV3 from './components/cards-container-v3'
import CardsContainerV4 from './components/cards-container-v4'

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
  return (
    <div>
      {/* <CardsContainer contents={contents} /> */}
      {/* <CardsContainerV2 contents={contents} /> */}
      {/* <CardsContainerV3 contents={contents} /> */}
      <CardsContainerV4 contents={contents} />
    </div>
  )
}

export default SkillsetSection
