import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Tennis eCommerce</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
