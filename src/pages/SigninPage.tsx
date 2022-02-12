import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import AuthPage from '~/components/AuthPage';
import { AuthFormFields } from '~/types/authForm';

interface FormInputs {
  email: string;
  password: string;
}

interface Props {}

const SigninPage: FC<Props> = () => {
  const onSubmit: SubmitHandler<AuthFormFields> = data => console.log(data);

  return <AuthPage onSubmit={onSubmit} />;
};

export default SigninPage;
