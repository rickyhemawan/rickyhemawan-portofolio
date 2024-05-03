import AppNavbar from './components/app-navbar'
import CardGradientBorder from './components/card-gradient-border'
import MdxLayout from './components/mdx-layout'

import AchievementText from '../contents/achievements.mdx'
import { ThemeSwitcher } from './components/theme-switcher'
import ButtonGradientBorder from './components/button-gradient-border'
import IntroductionSection from './sections/introduction'
import SkillsetSection from './sections/skillset'

export default function Home() {
  return (
    <main>
      <AppNavbar />
      <ThemeSwitcher />
      <ButtonGradientBorder>test</ButtonGradientBorder>
      <div className="h-48" />
      {/* <div className="mx-12 my-12"> */}

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <IntroductionSection />
        <div className="h-48" />
        {/* card sandbox */}
        <SkillsetSection />
        {/* divider */}
        <div className="mt-80"></div>
        {/* text sandbox */}
        <div>
          <MdxLayout>
            <AchievementText />
          </MdxLayout>
        </div>
      </div>
    </main>
  )
}
