import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { Divider } from '@mui/material';
import TitleText from '~/features/Auth/TitleText';
import SocialLogins from '~/features/Auth/SocialLogins';
import ChangePage from '~/features/Auth/ChangePageLink';
import AuthForm from '~/features/Auth/AuthForm';
import PageContainer from '~/components/CenteredContainer';
import { useAuth } from '~/features/Auth/useAuth';
import RouterRedirectState from '~/types/RouterRedirectState';

interface Props {
  onSubmit: SubmitHandler<any>;
  signUp?: boolean;
}

const AuthPage: FC<Props> = ({ onSubmit, signUp }) => {
  const { authUser } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  if (authUser) {
    navigate((state as RouterRedirectState)?.from || '/home');
  }

  return (
    <PageContainer>
      <TitleText signUp={signUp} />
      <AuthForm signUp={signUp} onSubmit={onSubmit} />
      <Divider sx={{ my: 4 }}>OR</Divider>
      <SocialLogins />
      <ChangePage signUp={signUp} />
    </PageContainer>
  );
};

export default AuthPage;
