import '../styles/globals.css'
import Navbar from '../components/NavBar'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
  <div>
      <Head>
        <title>Metodologias Dev</title>
        <meta name="description" content="Metodologias Dev" />
        <link rel="shortcut icon" href="/image/favicon.ico" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/image/logo.svg"/>

      </Head>
  <Navbar/>
  
  <Component {...pageProps} />
  </div>
  )

}

export default MyApp
