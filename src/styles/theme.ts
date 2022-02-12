import { createTheme, PaletteMode } from '@mui/material';
import { lighten, darken } from 'polished';

const primary = '#00e778';

const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: primary,
        light: lighten(0.05, primary),
        dark: darken(0.05, primary),
        contrastText: '#FFF',
      },
      background: {
        default: mode === 'light' ? '#FFF' : '#000213',
        paper: mode === 'light' ? '#FFF' : '#000213',
      },
    },
    shape: {
      borderRadius: 10,
    },
  });

export default getTheme;
