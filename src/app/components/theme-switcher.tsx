'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, useAnimation } from 'framer-motion'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const controls = useAnimation()
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    document.body.classList.remove('transition-all')
    setTimeout(() => {
      document.body.classList.add('transition-all')
    }, 10000)
  }, [theme])

  const onThemeChanged = async () =>
    setTheme(theme === 'light' ? 'dark' : 'light')

  if (!mounted) return null

  return (
    <button
      className="rounded bg-gray-200 px-4 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
      onClick={onThemeChanged}
    >
      Toggle Theme
    </button>
  )
}
