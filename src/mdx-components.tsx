import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <p className="text-justify">{children}</p>,
    ...components,
  }
}
