import Head from 'next/head'
import Footer from './footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AOCodex</title>
        <meta name="description" content="Albion Online Codex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AOCodex 
        </h1>

        <p className={styles.description}>
          Coming soon! Useful tools and information for Albion Online!
        </p>
      </main>

      <Footer/>
    </div>
  )
}
