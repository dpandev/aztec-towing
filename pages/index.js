import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aztec Towing</title>
        <meta name="description" content="A Parter for the Mayonnaise Farmer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
