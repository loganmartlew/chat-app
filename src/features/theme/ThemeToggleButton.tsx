import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { RootState } from '~/app/rootReducer';
import { toggleTheme, Theme } from '~/features/Theme/themeSlice';

interface Props {}

const ThemeToggleButton: FC<Props> = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <Tooltip title='Toggle Theme'>
      <IconButton
        aria-label='toggle theme'
        color='inherit'
        onClick={() => dispatch(toggleTheme({}))}
      >
        {theme === Theme.DARK ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggleButton;
