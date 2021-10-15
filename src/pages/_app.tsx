import React, { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'apollo/apollo-client';
import { theme } from '../theme';
import '../index.css';

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
