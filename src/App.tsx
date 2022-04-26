import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import dark from './styles/theme/dark';
import light from './styles/theme/light';

export function App() {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    theme.title === 'light' ? setTheme(dark) : setTheme(light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header onToggleTheme={toggleTheme} />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
