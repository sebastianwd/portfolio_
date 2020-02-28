import React, { useContext } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { rhythm } from '@theme/typography'
import styled from '@emotion/styled'
import { ThemesContextProvider, ThemesContext } from '@context'
import { Nav } from '@components'
import GlobalStyles from '../global-styles'

interface Props {
  children: React.ReactNode
}

const App = (props: Props) => {
  const { children } = props

  const { theme } = useContext(ThemesContext)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container id="scroller">{children}</Container>
      <Nav />
    </ThemeProvider>
  )
}

const Layout = (props: Props) => {
  const { children } = props

  return (
    <ThemesContextProvider>
      <App>{children}</App>
    </ThemesContextProvider>
  )
}

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
`

export default Layout
