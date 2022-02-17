import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Dialog,
  Container,
  Box,
  Typography,
  Link,
  Button,
} from '@mui/material';
import { Edit, Logout } from '@mui/icons-material';
import { useAuth } from '~/features/Auth/useAuth';
import Avatar from '~/components/Avatar';
import signOut from '~/services/firebase/signOut';

interface Props {
  open: boolean;
  onClose: () => void;
}

const AccountDialog: FC<Props> = ({ open, onClose }) => {
  const { authUser } = useAuth();

  return (
    <Dialog open={open} onClose={onClose}>
      <Container
        sx={{
          py: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Avatar sx={{ width: 80, height: 80, fontSize: '2.4rem' }} />
        <Typography>{authUser?.username}</Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <RouterLink to='/editprofile' style={{ textDecoration: 'none' }}>
            <Button component='span' endIcon={<Edit />}>
              Edit Profile
            </Button>
          </RouterLink>
          <Button endIcon={<Logout />} onClick={() => signOut()}>
            Sign Out
          </Button>
        </Box>
      </Container>
    </Dialog>
  );
};

export default AccountDialog;
