const CardShadowGradient: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative h-72 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 shadow-lg blur-3xl" />
      <div className="h-full p-0.5">
        <div className="relative h-full rounded-lg bg-white dark:bg-black">
          <div className="h-full p-4">
            <div className="h-full overflow-hidden">{children}</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white from-5% to-transparent to-50% dark:from-black" />
        </div>
      </div>
    </div>
  )
}

export default CardShadowGradient
