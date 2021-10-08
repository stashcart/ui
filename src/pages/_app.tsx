import { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';

import '../index.css';

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
