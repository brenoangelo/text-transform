import { darkTheme } from '../styles/themes/dark'
import 'styled-components'

type ThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}