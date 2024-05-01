const CardVertical: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className="
        mx-2
        max-w-sm
        overflow-hidden
        rounded
        bg-white
        bg-opacity-15
        shadow-lg
      "
    >
      {children}
    </div>
  )
}

export default CardVertical
