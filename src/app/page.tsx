import IntroductionSection from './sections/introduction'
import SkillsetSection from './sections/skillset'
import AchievementsSection from './sections/achievements'
import FluidNavbar from './components/fluid-navbar'
import Sections from './sections'

export default function Home() {
  return (
    <main>
      {/* <AppNavbar /> */}
      {/* TODO: fix Theme colors before unlocking this feature */}
      {/* <ThemeSwitcher /> */}

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="mt-[10vh]" />
        <IntroductionSection />
        <div className="pb-20" />
        <Sections />
        <div className="pb-24" />
      </div>
    </main>
  )
}
