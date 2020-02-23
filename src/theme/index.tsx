export interface Theme {
  name: string
  background: string
  surface: string
  black: string
  primary: string
  secondary: string
  textPrimary: string
  textSecondary: string
}

const themes: Record<string, Theme> = {
  default: {
    name: 'default',
    background: '#17171A',
    surface: '#0E0E0F',
    black: '#0C0C0C ',
    primary: '#00fff5',
    secondary: '#1D1D21',
    textPrimary: '#FAF3F3',
    textSecondary: 'rgba(245, 245, 247, 0.8)',
  },
  light: {
    name: 'light',
    background: '#FFF',
    surface: '#1D1D21',
    black: '#0C0C0C ',
    primary: '#00fff5',
    secondary: '#2D2D2D',
    textPrimary: '#000',
    textSecondary: 'rgba(245, 245, 247, 0.8)',
  },
}

export default themes
