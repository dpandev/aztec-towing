import Head from 'next/head'
import { LandingPage } from '../components/LandingPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aztec Towing, LLC.</title>
        <meta name="description" content="#1 Towing Services Provider in the Colorado Springs area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  )
}