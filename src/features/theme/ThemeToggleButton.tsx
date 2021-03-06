import { FC } from 'react';
import { Tooltip, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Theme } from '~/features/Theme/themeSlice';
import { useTheme } from '~/features/Theme/useTheme';

interface Props {}

const ThemeToggleButton: FC<Props> = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip title='Toggle Theme'>
      <IconButton
        aria-label='toggle theme'
        color='inherit'
        size='large'
        onClick={() => toggleTheme()}
      >
        {theme === Theme.DARK ? (
          <Brightness7 fontSize='inherit' />
        ) : (
          <Brightness4 fontSize='inherit' />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggleButton;
