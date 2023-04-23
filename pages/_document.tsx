import { Html, Head, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const Document: FC = () => {
  return (
    <Html lang={'en'}>
      <Head>
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1'}
        />
        <link rel={'icon'} href={'/favicon.ico'} />
        <link
          rel={'stylesheet'}
          href={
            'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
