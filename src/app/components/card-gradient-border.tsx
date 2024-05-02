import ButtonGradientBorder from './button-gradient-border'

interface CardGradientBorderProps {
  children?: React.ReactNode
  height?: string
}

const CardGradientBorder: React.FC<CardGradientBorderProps> = ({
  children,
  height = 'h-72',
}) => {
  return (
    <div className={`relative ${height} overflow-hidden rounded-lg`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl" />
      <div className="h-full p-[3px]">
        <div className="relative h-full rounded-lg bg-white dark:bg-black">
          <div className="h-full p-4">
            <div className="h-full overflow-hidden">{children}</div>
            <div className="absolute inset-4 bg-gradient-to-t from-white from-5% to-transparent to-30% dark:from-black" />
            <div className="absolute bottom-4 right-4">
              <ButtonGradientBorder>Read More</ButtonGradientBorder>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardGradientBorder
