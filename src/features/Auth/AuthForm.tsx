import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PasswordField from '~/features/Auth/PasswordField';
import { AuthFormFields } from '~/types/authForm';

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5em',
  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
    {
      '-webkit-box-shadow': `0 0 0 30px ${theme.palette.background.default} inset !important`,
      'border-radius': '0',
    },
}));

interface Props {
  onSubmit: SubmitHandler<AuthFormFields>;
  signUp?: boolean;
}

const AuthForm: FC<Props> = ({ onSubmit, signUp }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const sumbitWithErrorHandling = (data: AuthFormFields) => {
    onSubmit(data).catch((error: any) => {
      if (error.code === 'auth/wrong-password') {
        setError('password', { message: 'Incorrect password' });
      }

      if (error.code === 'auth/user-not-found') {
        setError('email', { message: 'Account does not exist' });
      }
    });
  };

  const submit: SubmitHandler<any> = (data: AuthFormFields, event) => {
    if (!signUp) {
      sumbitWithErrorHandling(data);
      return;
    }

    if (data.confirmPassword !== data.password) {
      setError('confirmPassword', { message: 'Passwords must match' });
      return;
    }

    sumbitWithErrorHandling(data);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <TextField
        label='Email'
        error={!!errors.email}
        helperText={errors?.email?.message}
        {...register('email', { required: true })}
      />
      <PasswordField error={errors?.password?.message} register={register} />
      {signUp && (
        <PasswordField
          error={errors?.confirmPassword?.message}
          register={register}
          confirm
        />
      )}
      <Button type='submit' variant='contained' size='large'>
        {signUp ? 'Sign Up' : 'Sign In'}
      </Button>
    </Form>
  );
};

export default AuthForm;
