import React, { useContext } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { RouteComponentProps } from '@reach/router'
import { ThemesContextProvider, ThemesContext } from '@context'
import { SitePageContext } from '@generated/gatsby-types'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import GlobalStyles from './global-styles'
import ProjectLayout from './project'
import DefaultLayout from './default'
import 'animate.css'
import 'bootstrap-4-grid'

interface Props {
  children: React.ReactNode
}

interface LayoutProps extends RouteComponentProps {
  children: React.ReactNode
  pageContext: SitePageContext
}

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

const App = (props: Props) => {
  const { children } = props

  const { theme } = useContext(ThemesContext)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const Layout = (props: LayoutProps) => {
  const { children, pageContext, location } = props

  const renderLayout = (): JSX.Element => {
    if (pageContext.layout === 'project') {
      return <ProjectLayout>{children}</ProjectLayout>
    }

    return <DefaultLayout location={location}>{children}</DefaultLayout>
  }

  return (
    <ThemesContextProvider>
      <App>
        <GlobalStyles />
        {renderLayout()}
      </App>
    </ThemesContextProvider>
  )
}

export default Layout
