import { UserProvider } from '@auth0/nextjs-auth0/client';
import './global.css';

export default function App({ Component, pageProps }) {
  return (
     <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
