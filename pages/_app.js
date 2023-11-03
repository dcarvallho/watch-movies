import "../styles/globals.css";
import Wrapper from "../components/wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
