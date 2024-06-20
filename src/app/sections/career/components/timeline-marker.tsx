const TitleMarker = ({
  children,
}: {
  children?: React.ReactNode
  date?: string
  circle?: number
  last?: boolean
}) => {
  return (
    <div
      className={`
        my-4
        flex 
        flex-col 
        items-start 
        
        before:absolute 
        before:left-2
        
        after:absolute 
        after:left-2 
        after:box-content 
        after:h-4 after:w-4 
        after:-translate-x-1/2 
        after:translate-y-1.5 
        after:rounded-full 
        after:bg-purple-300 
        
        group-last:before:hidden 
        
        sm:flex-row 
        sm:before:left-0 
        sm:before:ml-[6.5rem] 
        sm:after:left-0 
        sm:after:ml-[6.5rem]
      `}
    >
      <div />
      <div className="text-justify text-cyan-100">{children}</div>
    </div>
  )
}

const Marker = ({
  children,
}: {
  children?: React.ReactNode
  date?: string
  circle?: number
}) => {
  return (
    <div
      className={`
        my-4
        flex 
        flex-col 
        items-start 
        
        before:absolute 
        before:left-2
        
        after:absolute 
        after:left-2 
        after:box-content 
        after:h-2 after:w-2 
        after:-translate-x-1/2 
        after:translate-y-1.5 
        after:rounded-full 
        after:bg-purple-500 
        
        group-last:before:hidden 
        
        sm:flex-row 
        sm:before:left-0 
        sm:before:ml-[6.5rem] 
        sm:after:left-0 
        sm:after:ml-[6.5rem]
      `}
    >
      <div />
      <div className="text-justify text-purple-100">{children}</div>
    </div>
  )
}

export { TitleMarker, Marker }
