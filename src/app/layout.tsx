import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from './components/theme-provider'

export const metadata: Metadata = {
  title: 'Ricky Hemawan Portofolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
