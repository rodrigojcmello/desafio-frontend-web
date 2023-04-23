import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { globalCss } from '@stitches/react';
import { Container } from '@/components/Container';

const globalStyles = globalCss({
  body: { margin: 0, padding: 0, backgroundColor: '#2a3441' },
  html: {
    fontFamily:
      'Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
  },
  '.material-symbols-outlined': {
    fontVariationSettings: "'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48",
  },
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
