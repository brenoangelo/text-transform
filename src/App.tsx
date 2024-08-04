import { ThemeProvider } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { TextTransform } from './components/TextTransform';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { AdsenseComponent } from './adsense';

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <TextTransform />

      <AdsenseComponent />
      <GlobalStyle />
      <Analytics />
    </ThemeProvider>
  );
}
