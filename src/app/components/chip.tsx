const Chip: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <span
      className="
        mb-2 
        mr-2
        inline-block
        rounded-full
        bg-gray-200
        px-3
        py-1
        text-sm
        font-semibold
        text-gray-700
      "
    >
      {children}
    </span>
  )
}

export default Chip
