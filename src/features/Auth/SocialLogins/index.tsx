import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FacebookButton from '~/features/Auth/SocialLogins/FacebookButton';
import GoogleButton from '~/features/Auth/SocialLogins/GoogleButton';
import { signInWithFacebook } from '~/services/firebase/facebookProvider';
import { signInWithGoogle } from '~/services/firebase/googleProvider';
import RouterRedirectState from '~/types/RouterRedirectState';

const SocialButtons = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2em',
  marginBottom: '3em',
});

interface Props {}

const SocialLogins: FC<Props> = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const onFacebookClick = () => {
    signInWithFacebook().then(() => {
      navigate((state as RouterRedirectState)?.from || '/home');
    });
  };

  const onGoogleClick = () => {
    signInWithGoogle().then(() => {
      navigate((state as RouterRedirectState)?.from || '/home');
    });
  };

  return (
    <SocialButtons>
      <FacebookButton onClick={() => onFacebookClick()} />
      <GoogleButton onClick={() => onGoogleClick()} />
    </SocialButtons>
  );
};

export default SocialLogins;
