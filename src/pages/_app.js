import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <title>Welcome to my Portfolio!</title>
      </header>

      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
