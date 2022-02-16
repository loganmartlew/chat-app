import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const auth = getAuth();

  await signInWithRedirect(auth, provider);
  await getRedirectResult(auth);
};
