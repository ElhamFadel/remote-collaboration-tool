import './App.css';
import './firebase/config';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth';
import { useState, useEffect } from 'react';

const auth = getAuth();
const generateRecaptcha = () => {
  console.log('generateRecaptcha');
  window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-container',
    {
      size: 'invisible',
      callback: (response) => {
        console.log(response, 'response', 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
      }
    },
    auth
  );
};
const requestOTP = async () => {
  try {
    const phoneNumber = '+972 597 853623';
    generateRecaptcha();
    console.log('requestOTP Hiiiiiiiiiiii');
    const appVerifi = window.recaptchaVerifier;
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifi);
    console.log(confirmationResult, 'confirmationResult');
    window.confirmationResult = confirmationResult;
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [code, setCode] = useState('');

  const verifyOTP = async () => {
    try {
      if (code.length === 6) {
        const confirmationResult = window.confirmationResult;
        confirmationResult
          .confirm(code)
          .then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log('User signed in successfully', result, user);
            // ...
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyOTP();
  }, [code]);

  return (
    <>
      <button onClick={requestOTP} id="recaptcha-container">
        Request OTP
      </button>
      <input type="text" id="otp" onChange={(e) => setCode(e.target.value)} value={code} />
    </>
  );
}

export default App;
