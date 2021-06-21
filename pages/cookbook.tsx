import Head from 'next/head'
import Footer from './footer'
import styles from '../styles/Home.module.css'

export default function CookBook() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CookBook - AOCodex</title>
        <meta name="description" content="Albion Online Codex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cook Book
        </h1>

        <p className={styles.description}>
            The Cook Book
        </p>
      </main>

      <Footer/>
    </div>
  )
}
