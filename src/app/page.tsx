import AppNavbar from './components/app-navbar'
import CardVertical from './components/card-vertical'
import MdxLayout from './components/mdx-layout'

import PlaceholderText from '../contents/placeholder-text.mdx'
import AchievementText from '../contents/achievements.mdx'
import { ThemeSwitcher } from './components/theme-switcher'

export default function Home() {
  return (
    <main>
      <AppNavbar />
      <ThemeSwitcher />
      {/* <div className="mx-12 my-12"> */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* card sandbox */}
        <div className="flex">
          <div className="flex-1">
            <CardVertical>
              <PlaceholderText />
            </CardVertical>
          </div>
          <div className="flex-1">
            <CardVertical>testing</CardVertical>
          </div>
          <div className="flex-1">
            <CardVertical>
              <MdxLayout>
                <AchievementText />
              </MdxLayout>
            </CardVertical>
          </div>
        </div>
        {/* divider */}
        <div className="mt-80"></div>
        {/* text sandbox */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
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
