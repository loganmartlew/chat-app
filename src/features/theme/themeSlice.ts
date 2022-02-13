import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: Theme.LIGHT,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state, _) {
      if (state.theme === Theme.LIGHT) {
        state.theme = Theme.DARK;
      } else {
        state.theme = Theme.LIGHT;
      }
    },
    setTheme(state, action: PayloadAction<Theme>) {
      const theme = action.payload;
      state.theme = theme;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
