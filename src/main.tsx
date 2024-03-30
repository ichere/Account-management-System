import './index.css';

import { ChakraProvider, createStandaloneToast, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { COLORS } from './constants/colors';

const { ToastContainer } = createStandaloneToast();

const theme = extendTheme({
  colors: {
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
    primary: {
      500: COLORS.yellow,
    },
  },
  fonts: {
    heading: 'Open Sans',
    body: `'Turbine-Medium', sans-serif`,
    family: `'Turbine-Medium'`,
  },
});

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
      <App />
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>,
);
