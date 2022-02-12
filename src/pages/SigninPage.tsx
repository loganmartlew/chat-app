import { FC } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

interface Props {}

const SigninPage: FC<Props> = () => {
  return (
    <Container>
      <Box sx={{ width: 'max-content', mx: 'auto' }}>
        <Typography
          variant='h4'
          component='h1'
          fontWeight='700'
          color='primary'
        >
          Welcome Back!
        </Typography>
      </Box>
    </Container>
  );
};

export default SigninPage;
