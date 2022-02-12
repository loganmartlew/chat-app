import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Container, Box, Divider } from '@mui/material';
import TitleText from '~/components/AuthPage/TitleText';
import SocialLogins from '~/components/AuthPage/SocialLogins';
import ChangePage from '~/components/AuthPage/ChangePage';
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
        <TitleText />
        <AuthForm signUp={signUp} onSubmit={onSubmit} />
        <Divider sx={{ my: 4 }}>OR</Divider>
        <SocialLogins />
        <ChangePage signUp={signUp} />
      </Box>
    </Container>
  );
};

export default AuthPage;
