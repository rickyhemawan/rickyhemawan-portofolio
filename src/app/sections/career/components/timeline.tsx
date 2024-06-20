const Timeline = ({
  children,
  date,
  last = false,
}: {
  children?: React.ReactNode
  date?: string
  circle?: number
  last?: boolean
}) => {
  return (
    <div
      className={`
        mb-1 
        flex 
        flex-col 
        items-start 
        
        before:absolute 
        before:left-2 
        before:h-full 
        before:-translate-x-1/2 
        before:translate-y-3 
        before:self-start 
        before:bg-gradient-to-b
        before:from-blue-700
        before:to-purple-700
        ${!last && 'before:px-px'}
        
        after:absolute 
        after:left-2 
        after:box-content 
        after:h-4 after:w-4 
        after:-translate-x-1/2 
        after:translate-y-1.5 
        after:rounded-full 
        after:bg-blue-500
        
        group-last:before:hidden 
        
        sm:flex-row 
        sm:before:left-0 
        sm:before:ml-[6.5rem] 
        sm:after:left-0 
        sm:after:ml-[6.5rem]
      `}
    >
      <time className="left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-700 sm:absolute sm:mb-0">
        {date}
      </time>
      <div className="text-2xl font-bold text-emerald-100">{children}</div>
    </div>
  )
}

export default Timeline
