import IntroductionSection from './sections/introduction'
import SkillsetSection from './sections/skillset'
import AchievementsSection from './sections/achievements'
import FluidNavbar from './components/fluid-navbar'

export default function Home() {
  return (
    <main>
      {/* <AppNavbar /> */}
      {/* TODO: fix Theme colors before unlocking this feature */}
      {/* <ThemeSwitcher /> */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <IntroductionSection className="mt-[10vh] pb-20" />
        <FluidNavbar />
        {/* card sandbox */}
        <AchievementsSection className="pb-24 pt-4" />
      </div>
    </main>
  )
}
