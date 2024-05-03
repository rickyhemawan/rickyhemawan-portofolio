import CardReadMore from './card-read-more'

export interface Content {
  key: string
  content: React.ReactNode
}

const CardsContainer = ({ contents }: { contents: Content[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {contents.map(content => {
        return (
          <div
            key={content.key}
            className="w-full max-w-[calc(66.666%_-_4px)] md:max-w-[calc(33.333%_-_4px)] lg:max-w-[calc(25%_-_4px)]"
          >
            <CardReadMore>{content.content}</CardReadMore>
          </div>
        )
      })}
    </div>
  )
}

export default CardsContainer
