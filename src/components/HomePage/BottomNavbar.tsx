import { FC } from 'react';
import { Toolbar, Avatar, Typography, Box, IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import AppBar from '~/components/AppBar';
import { useAuth } from '~/features/Auth/useAuth';
import getStringAcronym from '~/util/getStringAcronym';
import ThemeToggleButton from '~/features/Theme/ThemeToggleButton';
import { useTheme } from '@mui/material';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

interface Props {}

const BottomNavbar: FC<Props> = () => {
  const { authUser } = useAuth();
  const theme = useTheme();
  console.log(theme);

  return (
    <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ gap: 1 }}>
        <StyledAvatar
          alt={authUser!.username}
          src={authUser!.avatar}
          sx={{ my: 2 }}
        >
          {!authUser!.avatar && getStringAcronym(authUser!.username)}
        </StyledAvatar>
        <Typography>{authUser!.username}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <ThemeToggleButton />
        <IconButton size='large' color='inherit'>
          <Settings fontSize='inherit' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BottomNavbar;
