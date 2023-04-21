import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Next Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Link href={'/todo'} className={styles.card}>
          <h1>
            TODO
          </h1>
        </Link>
        <Link href={'/quiz'} className={styles.card}>
          <h1>
            QUIZ
          </h1>
        </Link>
      </div>
    </>
  )
}
