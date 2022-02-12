import { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from '~/pages/WelcomePage';
import SigninPage from '~/pages/SigninPage';
import SignupPage from '~/pages/SignupPage';
import getTheme from '~/styles/theme';

interface Props {}

const App: FC<Props> = () => {
  return (
    <ThemeProvider theme={getTheme('dark')}>
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
