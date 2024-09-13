import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Session } from "next-auth"; // 追加

const App = ({
  Component,
  pageProps,
}: AppProps & { session: Session | null }) => {
  // pagePropsの型を修正
  return (
    <SessionProvider
      session={(pageProps as { session: Session | null }).session}
    >
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
