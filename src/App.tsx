import { ThemeProvider } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { TextTransform } from './components/TextTransform';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { AdsenseComponent } from './adsense';
import { Helmet } from 'react-helmet';

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Text Transform
        </title>
        <meta name="description" content="Transforme seus textos para o que você precisar!" />
        <link rel="canonical" href="http://textransform.com.br" />
      </Helmet>
      <Header />
      <TextTransform />

      <AdsenseComponent />
      <GlobalStyle />
      <Analytics />
    </ThemeProvider>
  );
}
