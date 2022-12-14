import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        div {
          background: lightgreen;
        }
      `}</style>
    </Layout>
  );
}
