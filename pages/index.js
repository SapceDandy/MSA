import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageOne from "./pageOne/pageOne"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Service App</title>
        <meta name="description" content="My Service App" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <PageOne />
      </main>
    </div>
  )
}
