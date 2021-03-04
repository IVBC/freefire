import GlobalStyle from '@/styles/GlobalStyle';
import { AppProps } from 'next/app';
import { DefaultLayout } from './_layouts';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
