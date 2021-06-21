import { useRouter } from 'next/router'
import Head from 'next/head'
import Footer from '../footer'
import styles from '/styles/Home.module.css'

export default function searchplayer() {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Player - AOCodex</title>
        <meta name="description" content="Albion Online Codex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          { slug }
        </h1>
      </main>

      <Footer/>
    </div>
  )
}
