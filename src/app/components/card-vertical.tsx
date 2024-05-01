const CardVertical: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className="
        mx-2
        max-w-sm
        border-spacing-1
        p-4
        shadow-lg
      "
    >
      <div
        className="
          to-slate
          h-64
          overflow-hidden 
          "
      >
        {children}
      </div>
    </div>
  )
}

export default CardVertical
