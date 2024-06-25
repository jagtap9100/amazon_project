import Head from "next/head";
import Image from "next/image";
import App from "./_app";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://tea.fit/cdn/shop/files/Flipkart-white.png?v=1694755122&width=550" />
      </Head>
      <App />
    </>
  );
}
