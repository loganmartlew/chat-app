import { FC } from 'react';
import { Typography } from '@mui/material';

interface Props {
  signUp?: boolean;
}

const TitleText: FC<Props> = ({ signUp }) => {
  return (
    <Typography
      variant='h4'
      component='h1'
      fontWeight='700'
      color='primary'
      sx={{ mb: 3 }}
    >
      {signUp ? 'Create Account' : 'Welcome Back!'}
    </Typography>
  );
};

export default TitleText;
