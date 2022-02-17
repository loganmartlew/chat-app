import { FC } from 'react';
import { Toolbar, Typography, Box, IconButton, Fab } from '@mui/material';
import { Settings, Add } from '@mui/icons-material';
import AppBar from '~/components/AppBar';
import { useAuth } from '~/features/Auth/useAuth';
import ThemeToggleButton from '~/features/Theme/ThemeToggleButton';
import { useModal } from '~/hooks/useModal';
import Avatar from '~/components/Avatar';
import AccountDialog from '~/components/AccountDialog';

interface Props {}

const BottomNavbar: FC<Props> = () => {
  const { authUser } = useAuth();
  const [dialogOpen, toggleDialog] = useModal();

  return (
    <>
      <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ gap: 1.5, position: 'relative' }}>
          <Avatar
            role='button'
            onClick={() => toggleDialog()}
            sx={{ my: 2, cursor: 'pointer' }}
          />
          <Typography>{authUser!.username}</Typography>
          <Fab
            color='primary'
            sx={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Add />
          </Fab>
          <Box sx={{ flexGrow: 1 }} />
          <ThemeToggleButton />
          <IconButton size='medium' color='inherit'>
            <Settings fontSize='inherit' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AccountDialog open={dialogOpen} onClose={() => toggleDialog(false)} />
    </>
  );
};

export default BottomNavbar;
