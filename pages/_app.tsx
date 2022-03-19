/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { AppThemeProvider } from '../src/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppThemeProvider>
    <Component {...pageProps} />
  </AppThemeProvider>
);

export default MyApp;
