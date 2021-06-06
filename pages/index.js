import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JP McGlone</title>
        <meta name="description" content="The official site for JP McGlone, LLC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{height: "33%"}}/>
      <Image src="/logo.svg" alt="JP McGlone Logo" width={240} height={72} />
      <div style={{height: "67%"}}/>
    </div>
  )
}
