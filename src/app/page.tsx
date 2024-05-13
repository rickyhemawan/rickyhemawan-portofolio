import AppNavbar from './components/app-navbar'
import CardGradientBorder from './components/card-gradient-border'
import MdxLayout from './components/mdx-layout'

import AchievementText from '../contents/achievements.mdx'
import { ThemeSwitcher } from './components/theme-switcher'
import ButtonGradientBorder from './components/button-gradient-border'
import IntroductionSection from './sections/introduction'
import SkillsetSection from './sections/skillset'
import AchievementsSection from './sections/achievements'

export default function Home() {
  return (
    <main>
      <AppNavbar />
      <ThemeSwitcher />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <IntroductionSection />
        {/* card sandbox */}
        <AchievementsSection className="py-24" />
      </div>
    </main>
  )
}
