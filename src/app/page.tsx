import AppNavbar from './components/app-navbar'
import PlaceholderText from '../contents/placeholder-text.mdx'
import AchievementText from '../contents/achievements.mdx'
import MdxLayout from './components/mdx-layout'

export default function Home() {
  return (
    <main>
      <AppNavbar />
      <div className="mx-12 my-12">
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div className="md:mx-2 flex flex-col">
            <h1 className="text-5xl font-bold ">Ricky Hemawan</h1>
            <h2 className="text-4xl">Software Engineer</h2>
          </div>
          <div className="md:mx-2 flex flex-col">
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
