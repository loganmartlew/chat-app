import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import store from '~/app/store';
import { setAuthUser } from '~/features/Auth/authSlice';

export const signUp = async (
  email: string,
  username: string,
  password: string
) => {
  const auth = getAuth();

  await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser!, { displayName: username });

  if (auth.currentUser?.displayName === username) {
    store.dispatch(setAuthUser(auth.currentUser));
  }
};

export const signIn = async (email: string, password: string) => {
  const auth = getAuth();

  await signInWithEmailAndPassword(auth, email, password);
};
