import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Divider } from '@mui/material';
import TitleText from '~/features/Auth/TitleText';
import SocialLogins from '~/features/Auth/SocialLogins';
import ChangePage from '~/features/Auth/ChangePageLink';
import AuthForm from './AuthForm';
import PageContainer from '~/components/CenteredContainer';

interface Props {
  onSubmit: SubmitHandler<any>;
  signUp?: boolean;
}

const AuthPage: FC<Props> = ({ onSubmit, signUp }) => {
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
