import './index.css';

import {
  ChakraProvider,
  createStandaloneToast,
  extendTheme,
} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { COLORS } from './constants/colors';
import App from './App';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import ProfilePage from './pages/ProfilePage';
import Admin from './pages/admin';

const { toast, ToastContainer } = createStandaloneToast();
const theme = extendTheme({
  colors: {
    primary: 'blue',
    white: COLORS.white,
    black: COLORS.black,
    bgGrey: COLORS.bgGrey,
    headingGrey: COLORS.headingGrey,
    btnbg: COLORS.yellow,

    tablegray: {
      500: '#F9FBFB',
    },
    lightgreen: {
      500: '#3C7B79',
    },
  },
  fonts: {
    // heading: 'Open Sans 16px',
    // body: `'Inter', sans-serif`,
    family: `'Poppins`,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/signUp',
    element: <RegisterPage />,
  },
  {
    path: '/resetPassword',
    element: <ForgotPassword />,
  },
  {
    path: '/verifyEmail',
    element: <VerifyEmail />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
]);

export const errorNotifier = (errorMessage: string) => {
  return toast({
    title: 'Error',
    description:
      typeof errorMessage === 'string' ? errorMessage : 'SOMETHING WENT WRONG',
    status: 'error',
    duration: 5000,
    isClosable: true,
    position: 'top-right',
  });
};

export const successNotifier = (info: string) => {
  return toast({
    title: 'Success',
    description: info,
    status: 'success',
    duration: 5000,
    isClosable: true,
    position: 'top',
  });
};

export const shortNotifier = (info: string) => {
  return toast({
    title: 'Success',
    description: info,
    status: 'success',
    duration: 5000,
    isClosable: true,
    position: 'bottom',
  });
};

export const errorMessage = (data: any) => {
  return data.response.data.message;
};

// Sentry.init({
//   dsn: 'https://31069d5c32e04ac0814667b90827897b@o523824.ingest.sentry.io/4505128370896896',
//   integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
//   // Performance Monitoring
//   tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
//   // Session Replay
//   replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//   replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// });
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>
);
