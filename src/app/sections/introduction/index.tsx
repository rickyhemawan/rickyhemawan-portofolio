import PlaceholderText from '../../../contents/placeholder-text.mdx'

const IntroductionSection = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col md:mx-2">
        <h1 className="text-5xl font-bold ">Ricky Hemawan</h1>
        <h2 className="text-4xl">Software Engineer</h2>
      </div>
      <div className="flex flex-col md:mx-2">
        <h1 className="text-4xl font-bold">Line Two</h1>
        <PlaceholderText />
      </div>
    </div>
  )
}

export default IntroductionSection
