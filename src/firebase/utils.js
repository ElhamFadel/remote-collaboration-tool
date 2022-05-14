import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider
  // RecaptchaVerifier,
  // signInWithPhoneNumber
} from 'firebase/auth';
import './config';
const auth = getAuth();

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
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

//login with facebook
export const loginWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookAuthProvider);
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token, 'token');
    const user = result.user;
    console.log(user, 'user');
  } catch (error) {
    console.log(error);
  }
};

//login with github
export const loginWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubAuthProvider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token, 'token');
    const user = result.user;
    console.log(user, 'user');
  } catch (error) {
    console.log(error);
  }
};

//invisible reCAPTCHA
// const generateRecaptcha = () => {
//   console.log('generateRecaptcha');
//   window.recaptchaVerifier = new RecaptchaVerifier(
//     'recaptcha-container',
//     {
//       size: 'invisible',
//       callback: (response) => {
//         console.log(response, 'response', 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
//       }
//     },
//     auth
//   );
// };
// export const requestOTP = async () => {
//   try {
//     const phoneNumber = '+972 597 853623';
//     generateRecaptcha();
//     console.log('requestOTP Hiiiiiiiiiiii');
//     const appVerifi = window.recaptchaVerifier;
//     const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifi);
//     console.log(confirmationResult, 'confirmationResult');
//     window.confirmationResult = confirmationResult;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const verifyOTP = async () => {
//   try {
//     if (code.length === 6) {
//       const confirmationResult = window.confirmationResult;
//       confirmationResult
//         .confirm(code)
//         .then((result) => {
//           // User signed in successfully.
//           const user = result.user;
//           console.log('User signed in successfully', result, user);
//           // ...
//         })
//         .catch((error) => {
//           // User couldn't sign in (bad verification code?)
//           console.log(error);
//         });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
