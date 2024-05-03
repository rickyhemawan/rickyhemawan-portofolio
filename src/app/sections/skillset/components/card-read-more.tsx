import ButtonGradientBorder from '@/app/components/button-gradient-border'
import CardGradientBorder from '@/app/components/card-gradient-border'

const CardReadMore = ({
  onButtonClick,
  children,
}: {
  onButtonClick?: () => void
  children: React.ReactNode
}) => {
  return (
    <CardGradientBorder height="h-72">
      <div className="h-full overflow-hidden">{children}</div>
      <div className="absolute inset-4 bg-gradient-to-t from-white from-5% to-transparent to-30% dark:from-black" />
      <div className="absolute bottom-4 right-4">
        <ButtonGradientBorder onClick={onButtonClick}>
          Read More
        </ButtonGradientBorder>
      </div>
    </CardGradientBorder>
  )
}

export default CardReadMore
