import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Container, Box, Divider } from '@mui/material';
import TitleText from '~/features/Auth/TitleText';
import SocialLogins from '~/features/Auth/SocialLogins';
import ChangePage from '~/features/Auth/ChangePageLink';
import AuthForm from './AuthForm';

interface Props {
  onSubmit: SubmitHandler<any>;
  signUp?: boolean;
}

const AuthPage: FC<Props> = ({ onSubmit, signUp }) => {
  return (
    <Container
      sx={{ height: '100vh', display: 'grid', placeContent: 'center' }}
    >
      <Box sx={{ width: 'max-content', mx: 'auto' }}>
        <TitleText signUp={signUp} />
        <AuthForm signUp={signUp} onSubmit={onSubmit} />
        <Divider sx={{ my: 4 }}>OR</Divider>
        <SocialLogins />
        <ChangePage signUp={signUp} />
      </Box>
    </Container>
  );
};

export default AuthPage;
