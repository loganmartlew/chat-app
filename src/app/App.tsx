import { useEffect, FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import getTheme from '~/styles/theme';
import { useTheme } from '~/features/Theme/useTheme';
import { Theme } from '~/features/Theme/themeSlice';
import RequireAuth from '~/features/Auth/RequireAuth';

import WelcomePage from '~/pages/WelcomePage';
import SigninPage from '~/pages/SigninPage';
import SignupPage from '~/pages/SignupPage';
import MainApp from '~/pages/MainApp';

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
          <Route element={<RequireAuth />}>
            <Route element={<MainApp />}>
              <Route path='/home' element={<h1>Home</h1>} />
              <Route path='/discover' element={<h1>Discover</h1>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
