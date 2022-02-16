import {
  getAuth,
  signInWithRedirect,
  FacebookAuthProvider,
} from 'firebase/auth';

const provider = new FacebookAuthProvider();

export const signInWithFacebook = async () => {
  const auth = getAuth();

  await signInWithRedirect(auth, provider);
};
