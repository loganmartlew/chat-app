import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import AuthPage from '~/features/Auth/AuthPage';
import { signUp } from '~/services/firebase/emailProvider';
import { AuthFormFields } from '~/types/authForm';

interface Props {}

const SignupPage: FC<Props> = () => {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthFormFields> = ({ email, password }) => {
    signUp(email, password).then(() => {
      navigate('/home');
    });
  };

  return <AuthPage onSubmit={onSubmit} signUp />;
};

export default SignupPage;
