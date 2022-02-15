import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const signUp = async (email: string, password: string) => {
  const auth = getAuth();

  await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email: string, password: string) => {
  const auth = getAuth();

  await signInWithEmailAndPassword(auth, email, password);
};
