import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer, { ThemeState } from '~/features/Theme/themeSlice';

const persistThemeConfig: PersistConfig<ThemeState> = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
};

const persistedThemeReducer = persistReducer(persistThemeConfig, themeReducer);

const rootReducer = combineReducers({
  theme: persistedThemeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
