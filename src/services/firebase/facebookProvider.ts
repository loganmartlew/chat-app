import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
} from 'firebase/auth';

const provider = new FacebookAuthProvider();

export const signInWithFacebook = async () => {
  const auth = getAuth();

  await signInWithRedirect(auth, provider);
  await getRedirectResult(auth);
};
