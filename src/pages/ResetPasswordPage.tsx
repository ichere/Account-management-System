/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { PageTitle, useDocumentTitle } from '../utils/pageTitle';
import PasswordResetPage from './PasswordResetPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import ResetSuccessPage from './ResetSuccessPage';
import SendOTPPage from './SendOTPPage';



export interface ForgotPasswordProp {
  setPasswordReset: (arg: string) => void;
}

const ResetPasswordPage = (): JSX.Element => {
  useDocumentTitle(PageTitle.Reset_Password);
  const [passwordReset, setPasswordReset] = useState<string>();

  return (
    <>
      {passwordReset === 'reset-password' ? (
        <ForgotPasswordPage setPasswordReset={setPasswordReset} />
      ) : passwordReset === 'password-reset' ? (
        <PasswordResetPage setPasswordReset={setPasswordReset} />
      ) : passwordReset === 'reset-success' ? (
        <ResetSuccessPage setPasswordReset={setPasswordReset} />
      ) : (
        <SendOTPPage setPasswordReset={setPasswordReset} />
      )}
    </>
  );
};

export default ResetPasswordPage;
