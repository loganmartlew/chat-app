import { FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Typography, Link } from '@mui/material';

interface Props {
  signUp?: boolean;
}

const ChangePage: FC<Props> = ({ signUp }) => {
  const { state } = useLocation();

  return (
    <Typography variant='subtitle2' fontWeight='400' textAlign='center'>
      {signUp ? `Already` : `Don't`} have an account?{' '}
      <RouterLink to={signUp ? '/signin' : '/signup'} state={state || null}>
        <Link component='span'>Sign {signUp ? 'In' : 'Up'}.</Link>
      </RouterLink>
    </Typography>
  );
};

export default ChangePage;
