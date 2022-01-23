import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/header.css'
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
