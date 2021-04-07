import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextInput from '../components/TextInput'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hacker News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to HackerNews
        </h1>
        <TextInput />
      </main>
    </div>
  )
}
