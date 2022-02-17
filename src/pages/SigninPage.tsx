import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import AuthPage from '~/features/Auth/AuthPage';
import { signIn } from '~/services/firebase/emailProvider';
import { AuthFormFields } from '~/types/authForm';
import RouterRedirectState from '~/types/RouterRedirectState';

interface Props {}

const SigninPage: FC<Props> = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state);

  const onSubmit: SubmitHandler<AuthFormFields> = ({ email, password }) => {
    return signIn(email, password).then(() => {
      navigate((state as RouterRedirectState)?.from || '/home');
    });
  };

  return <AuthPage onSubmit={onSubmit} />;
};

export default SigninPage;
