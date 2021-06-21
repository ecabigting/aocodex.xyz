import Head from 'next/head'
import Footer from './footer'
import styles from '../styles/Home.module.css'
import searchplayer from './searchplayer/[slug]'

export default function Player() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Player - AOCodex</title>
        <meta name="description" content="Albion Online Codex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Player
        </h1>

        <p className={styles.description}>
          <form method="post" onSubmit={searchplayer}>
            <label>Search:</label>
            <input type="text" id="search"/>
            <input type="submit" name="Search" value="submit"/>
          </form>
        </p>
      </main>

      <Footer/>
    </div>
  )
}
