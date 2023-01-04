import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

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
      </div> 
     </main>
    </>
  )
}
