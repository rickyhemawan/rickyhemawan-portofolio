export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div
      className="
        prose
        prose-headings:mt-8
        prose-headings:font-semibold 
        prose-h1:text-4xl 
        prose-h2:text-3xl 
        prose-h3:text-2xl 
        prose-h4:text-1xl
        prose-h2:mt-2
        prose-h3:mt-0
        prose-h1:text-center
        prose-headings:text-white
        prose-p:text-white
        prose-li:text-white
        prose-a:text-blue-300
        max-w-none
      "
    >
      {children}
    </div>
  )
}
