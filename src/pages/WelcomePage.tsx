import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';

interface Props {}

const WelcomePage: FC<Props> = () => {
  return (
    <Container
      sx={{ height: '100vh', display: 'grid', placeContent: 'center' }}
    >
      <Box sx={{ width: 'max-content', mx: 'auto', mb: 15 }}>
        <Typography
          variant='h2'
          component='h1'
          fontWeight='700'
          color='primary'
          sx={{ mb: 2 }}
        >
          Chat App
        </Typography>
        <Typography variant='subtitle1' textAlign='center' sx={{ mb: 4 }}>
          Start chatting today!
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button variant='outlined' component={Link} to='/signin'>
            Sign In
          </Button>
          <Button variant='contained' component={Link} to='/signup'>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default WelcomePage;
