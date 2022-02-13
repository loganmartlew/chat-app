import { getAuth, onAuthStateChanged } from 'firebase/auth';
import store from '~/app/store';
import { setAuthUser, removeAuthUser } from '~/features/Auth/authSlice';

export default () => {
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      store.dispatch(setAuthUser(user));
    } else {
      store.dispatch(removeAuthUser());
    }
  });
};
