import Head from 'next/head'
import { LandingPage } from '../components/LandingPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Local Tow</title>
        <meta name="description" content="Towing Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  )
}