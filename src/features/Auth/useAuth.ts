import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/app/rootReducer';

export const useAuth = () => {
  const state = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return {
    ...state,
  };
};
