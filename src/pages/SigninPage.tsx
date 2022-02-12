import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PasswordField from '~/components/PasswordField';
import FacebookButton from '~/components/FacebookButton';
import GoogleButton from '~/components/GoogleButton';

interface FormInputs {
  email: string;
  password: string;
}

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5em',
});

const SocialLogins = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2em',
  marginBottom: '3em',
});

interface Props {}

const SigninPage: FC<Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);

  return (
    <Container
      sx={{ height: '100vh', display: 'grid', placeContent: 'center' }}
    >
      <Box sx={{ width: 'max-content', mx: 'auto' }}>
        <Typography
          variant='h4'
          component='h1'
          fontWeight='700'
          color='primary'
          sx={{ mb: 3 }}
        >
          Welcome Back!
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='Email'
            error={!!errors.email}
            {...register('email', { required: true })}
          />
          <PasswordField error={!!errors.password} register={register} />
          <Button type='submit' variant='contained' size='large'>
            Sign In
          </Button>
        </Form>
        <Divider sx={{ my: 4 }}>OR</Divider>
        <SocialLogins>
          <FacebookButton onClick={() => console.log('Facebook')} />
          <GoogleButton onClick={() => console.log('Google')} />
        </SocialLogins>
        <Typography variant='subtitle2' fontWeight='400' textAlign='center'>
          Don't have an account?{' '}
          <Link component={RouterLink} to='/signup'>
            Sign Up.
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SigninPage;
