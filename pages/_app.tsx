/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { AppThemeProvider } from '../src/theme';
import { AppContainer } from '../src/components/app-container';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppThemeProvider>
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  </AppThemeProvider>
);

export default MyApp;
