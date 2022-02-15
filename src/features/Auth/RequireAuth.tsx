import { FC } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '~/features/Auth/useAuth';

interface Props {}

const RequireAuth: FC<Props> = () => {
  const { authUser } = useAuth();
  const location = useLocation();

  if (!authUser) {
    return <Navigate to='/signin' state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
