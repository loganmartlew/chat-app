import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import AuthPage from '~/features/Auth/AuthPage';
import { signIn } from '~/services/firebase/emailProvider';
import { AuthFormFields } from '~/types/authForm';

interface Props {}

const SigninPage: FC<Props> = () => {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthFormFields> = ({ email, password }) => {
    signIn(email, password).then(() => {
      navigate('/home');
    });
  };

  return <AuthPage onSubmit={onSubmit} />;
};

export default SigninPage;
