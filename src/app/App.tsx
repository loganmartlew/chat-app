import { useEffect, FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import WelcomePage from '~/pages/WelcomePage';
import SigninPage from '~/pages/SigninPage';
import SignupPage from '~/pages/SignupPage';
import getTheme from '~/styles/theme';
import useTheme from '~/features/Theme/useTheme';
import { Theme } from '~/features/Theme/themeSlice';
interface Props {}

const App: FC<Props> = () => {
  const { theme, setTheme } = useTheme();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (theme) return;

    if (prefersDarkMode) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme || 'light')}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
