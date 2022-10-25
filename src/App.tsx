import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { TextTransform } from './components/TextTransform';
import { GlobalStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <TextTransform />
      <GlobalStyle />
    </ThemeProvider>
  );
}
