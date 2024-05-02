import React from 'react'

const ButtonGradient: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative inline-block">
      <div
        className="absolute inset-0 bg-gradient-to-r
        from-blue-500
        to-purple-500
        opacity-50
        shadow-lg
        blur-sm"
      ></div>
      <button
        className="relative bg-white
        px-4
        py-2
        text-black
        shadow-lg"
      >
        {children}
      </button>
    </div>
  )
}

export default ButtonGradient
