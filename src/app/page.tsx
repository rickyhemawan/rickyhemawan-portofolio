import AppNavbar from './components/app-navbar'
import CardVertical from './components/card-vertical'
import CardShadowGradient from './components/card-shadow-gradient'
import MdxLayout from './components/mdx-layout'

import PlaceholderText from '../contents/placeholder-text.mdx'
import AchievementText from '../contents/achievements.mdx'
import { ThemeSwitcher } from './components/theme-switcher'
import ButtonGradient from './components/button-gradient'

export default function Home() {
  return (
    <main>
      <AppNavbar />
      <ThemeSwitcher />
      <ButtonGradient />
      {/* <div className="mx-12 my-12"> */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* card sandbox */}

        <div className="flex flex-wrap justify-center gap-2">
          <div className="w-full max-w-[calc(66.666%_-_4px)] md:w-[calc(33.333%_-_4px)] lg:w-[calc(25%_-_4px)]">
            <CardShadowGradient>
              <PlaceholderText />
            </CardShadowGradient>
          </div>
          <div className="w-full max-w-[calc(66.666%_-_4px)] md:w-[calc(33.333%_-_4px)] lg:w-[calc(25%_-_4px)]">
            <CardShadowGradient>testing</CardShadowGradient>
          </div>
          <div className="w-full max-w-[calc(66.666%_-_4px)] md:w-[calc(33.333%_-_4px)] lg:w-[calc(25%_-_4px)]">
            <CardShadowGradient>
              <MdxLayout>
                <AchievementText />
              </MdxLayout>
            </CardShadowGradient>
          </div>
        </div>

        {/* <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2">
          <div>
            <CardShadowGradient>
              <PlaceholderText />
            </CardShadowGradient>
          </div>
          <div>
            <CardShadowGradient>testing</CardShadowGradient>
          </div>
          <div>
            <CardShadowGradient>
              <MdxLayout>
                <AchievementText />
              </MdxLayout>
            </CardShadowGradient>
          </div>
        </div> */}

        {/* divider */}
        <div className="mt-80"></div>
        {/* text sandbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col md:mx-2">
            <h1 className="text-5xl font-bold ">Ricky Hemawan</h1>
            <h2 className="text-4xl">Software Engineer</h2>
          </div>
          <div className="flex flex-col md:mx-2">
            <h1 className="text-4xl font-bold">Line Two</h1>
            <PlaceholderText />
          </div>
        </div>
        <div>
          <MdxLayout>
            <AchievementText />
          </MdxLayout>
        </div>
      </div>
    </main>
  )
}
