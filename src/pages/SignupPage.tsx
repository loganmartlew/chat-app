import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import AuthPage from '~/components/AuthPage';
import { AuthFormFields } from '~/types/authForm';

interface FormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {}

const SignupPage: FC<Props> = () => {
  const onSubmit: SubmitHandler<AuthFormFields> = data => console.log(data);

  return <AuthPage onSubmit={onSubmit} signUp />;
};

export default SignupPage;
