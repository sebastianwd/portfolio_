import React, { useState, createContext, useEffect } from 'react'
import { isEqual, get } from 'lodash'
import themes, { Theme } from '@theme'
import { useStorage } from '@hooks'

interface Props {
  children: React.ReactNode
}

interface ThemesContext {
  theme: Theme
  setTheme: (themeName: string) => void
}

const defaultTheme = themes.default

const themeKey = 'kodoku'

export const ThemesContext = createContext<ThemesContext>({
  theme: defaultTheme,
  setTheme: () => null,
})

export const ThemesContextProvider = (props: Props) => {
  const { children } = props

  const [theme, setTheme] = useState(defaultTheme)

  const storage = useStorage()

  const persistTheme = (themeName: string) => {
    const newTheme = themes[themeName]

    if (newTheme) {
      setTheme(newTheme)
      storage.set(themeKey, themeName)
    }
  }

  useEffect(() => {
    const savedThemeName = storage.get(themeKey)

    const savedTheme = get(themes, `${savedThemeName}`)

    if (!isEqual(savedThemeName, defaultTheme.name) && savedTheme) {
      setTheme(savedTheme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemesContext.Provider value={{ theme, setTheme: persistTheme }}>
      {children}
    </ThemesContext.Provider>
  )
}
