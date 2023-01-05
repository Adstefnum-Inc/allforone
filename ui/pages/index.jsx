import Link from 'next/link';
import React from 'react';
import Head from 'next/head'

function HomePage() {
  return (
    <>
     <Head>
        <title>Allforone</title>
        <meta name="description" content="The one stop shop for social media needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


       <div>
      <nav className="flex justify-between items-center py-4">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-800 font-bold text-2xl">
            ALLFORONE
          </a>
        </Link>
        <div className="flex">
          <Link href="/calendar">
            <a className="text-blue-500 hover:text-blue-800 px-4">Calendar</a>
          </Link>
          <Link href="/donate">
            <a className="text-blue-500 hover:text-blue-800 px-4">Donate</a>
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </nav>
      <header className="text-3xl font-bold">
        <h1>Welcome to AllForOne!</h1>
      </header>
      <main className="py-8">
        <p>
          AllForOne is a one stop shop for social media publishing, designed for
          creators who don't have the budget for expensive software.
        </p>
      </main>
      <section className="py-8 bg-gray-200">
        <h2 className="text-2xl font-bold">
          Join the AllForOne community now!
        </h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </section>
      <footer className="py-4">
        <p>Copyright 2021 AllForOne</p>
      </footer>
    </div> 

    </>
  );
}

export default HomePage;

