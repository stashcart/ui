import React, { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
