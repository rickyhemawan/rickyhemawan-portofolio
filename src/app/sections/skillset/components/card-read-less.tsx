import ButtonGradientBorder from '@/app/components/button-gradient-border'
import CardGradientBorder from '@/app/components/card-gradient-border'
import { cn } from '@/utils/cn'

const CardReadLess = ({
  onButtonClick,
  children,
  className,
}: {
  onButtonClick?: () => void
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <CardGradientBorder className={cn('h-full w-full', className)}>
      <div className="w-full p-4">
        <div>{children}</div>
        <div className="my-2" />
        <div className="flex justify-end" w-full>
          <ButtonGradientBorder onClick={onButtonClick}>
            Read Less
          </ButtonGradientBorder>
        </div>
      </div>
    </CardGradientBorder>
  )
}

export default CardReadLess
