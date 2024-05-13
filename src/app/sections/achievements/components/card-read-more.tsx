import ButtonGradientBorder from '@/app/components/button-gradient-border'
import CardGradientBorder from '@/app/components/card-gradient-border'
import { cn } from '@/utils/cn'

const CardReadMore = ({
  onButtonClick,
  children,
  className,
}: {
  onButtonClick?: () => void
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <CardGradientBorder className={cn('', className)}>
      <div className="h-full overflow-hidden">{children}</div>
      <div className="absolute inset-4 bg-gradient-to-t from-white from-5% to-transparent to-30% dark:from-black" />
      <div className="absolute bottom-4 right-4">
        <ButtonGradientBorder onClick={onButtonClick}>
          <div className="px-4 py-2">Read More</div>
        </ButtonGradientBorder>
      </div>
    </CardGradientBorder>
  )
}

export default CardReadMore
