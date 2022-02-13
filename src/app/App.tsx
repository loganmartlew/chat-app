import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RootState } from '~/app/rootReducer';
import WelcomePage from '~/pages/WelcomePage';
import SigninPage from '~/pages/SigninPage';
import SignupPage from '~/pages/SignupPage';
import getTheme from '~/styles/theme';
interface Props {}

const App: FC<Props> = () => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={getTheme(theme)}>
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
