import { cn } from '@/utils/cn'

const Chip: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        'mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700',
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Chip
