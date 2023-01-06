import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const inter = Inter({ subsets: ['latin'] })

const firebaseConfig = ({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



export default function Home() {
  return (
    <>
      <Head>
        <title>Allforone</title>
        <meta name="description" content="The one stop shop for social media needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div>
           <Link href="/calendar">
        Calendar
      </Link>
       <Link href="/login">
        Login
      </Link>
      </div> 
     </main>
    </>
  )
}
