import '../styles/globals.css'
import Navbar from '../components/NavBar'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
  <div>
      <Head>
        <title>Metodologias Dev</title>
        <meta name="description" content="Metodologias Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Navbar/>
  
  <Component {...pageProps} />
  </div>
  )

}

export default MyApp
