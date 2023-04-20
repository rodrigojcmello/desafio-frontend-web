import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { globalCss } from '@stitches/react';
import { Container } from '@/components/Container';

const globalStyles = globalCss({
  body: { margin: 0, padding: 0, backgroundColor: '#2a3441' },
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles();

  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default App;
