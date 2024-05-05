import { cn } from '@/utils/cn.ts'

interface CardGradientBorderProps {
  children?: React.ReactNode
  className?: string
}

const CardGradientBorder: React.FC<CardGradientBorderProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn('relative h-72 overflow-hidden rounded-[9px]', className)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl" />
      <div className="h-full p-[3px]">
        <div className="relative h-full rounded-lg bg-white dark:bg-black">
          <div className="h-full p-4">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default CardGradientBorder
