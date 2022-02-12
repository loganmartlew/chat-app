import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link } from '@mui/material';

interface Props {
  signUp?: boolean;
}

const ChangePage: FC<Props> = ({ signUp }) => {
  return (
    <Typography variant='subtitle2' fontWeight='400' textAlign='center'>
      {signUp ? `Already` : `Don't`} have an account?{' '}
      <Link component={RouterLink} to={signUp ? '/signin' : '/signup'}>
        Sign {signUp ? 'In' : 'Up'}.
      </Link>
    </Typography>
  );
};

export default ChangePage;
