import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/app/rootReducer';
import { toggleTheme, setTheme, Theme } from '~/features/Theme/themeSlice';

export default () => {
  const state = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const dispatchToggleTheme = () => dispatch(toggleTheme({}));
  const dispatchSetTheme = (theme: Theme) => dispatch(setTheme(theme));

  return {
    ...state,
    toggleTheme: dispatchToggleTheme,
    setTheme: dispatchSetTheme,
  };
};
