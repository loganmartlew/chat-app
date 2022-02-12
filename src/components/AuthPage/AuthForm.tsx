import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import PasswordField from '~/components/PasswordField';
import { AuthFormFields } from '~/types/authForm';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5em',
});

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

  const submit: SubmitHandler<any> = (data: AuthFormFields, event) => {
    if (!signUp) {
      onSubmit(data, event);
      return;
    }

    if (data.confirmPassword !== data.password) {
      setError('confirmPassword', { message: 'Passwords must match' });
      return;
    }

    onSubmit(data, event);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <TextField
        label='Email'
        error={!!errors.email}
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
