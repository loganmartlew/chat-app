import { FC } from 'react';
import { styled } from '@mui/material/styles';
import FacebookButton from '~/features/Auth/SocialLogins/FacebookButton';
import GoogleButton from '~/features/Auth/SocialLogins/GoogleButton';

const SocialButtons = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2em',
  marginBottom: '3em',
});

interface Props {}

const SocialLogins: FC<Props> = () => {
  return (
    <SocialButtons>
      <FacebookButton onClick={() => console.log('Facebook')} />
      <GoogleButton onClick={() => console.log('Google')} />
    </SocialButtons>
  );
};

export default SocialLogins;
