import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        div {
          background: lightgreen;
        }
      `}</style>
    </div>
  );
}
