import { useEffect, useRef } from 'react';

export enum PageTitle {
    Home = 'Project | Home',
    Register = 'Project | Sign Up',
    Login = 'Project | Login',
    ForgotPassword = 'Project | Forgot Password',
    VerifyEmail = 'Project | Email Verification',
    Profile = 'Project | Profile',
    Reset_Password = 'Project | Reset Password',
}

export const useDocumentTitle = (
    title: string,
    prevailOnUnmount = false
): void => {
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(
        () => () => {
            if (!prevailOnUnmount) {
                document.title = defaultTitle.current;
            }
        },
        []
    );
};
