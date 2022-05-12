import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const auth = getAuth();

const googleAuthProvider = new GoogleAuthProvider();
//login with googlw
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleAuthProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token, 'token');
    const user = result.user;
    console.log(user, 'user');
  } catch (error) {
    console.log(error);
  }
};
