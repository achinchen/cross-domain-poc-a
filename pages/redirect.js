import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { getDeliciousCookie } from '../utils'
import { SITE_B, REDIRECT_POINT } from '../constants'

export default function Redirect() {
  const [isLoading, setIsLoading] = useState(false)
  const [cookie] = useState(getDeliciousCookie)
  const fetchToGetCookie = async () => {
    setIsLoading(true)
    window.location = REDIRECT_POINT
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Cross Domain POC - Site A</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Cross Domain Cookie - Site A</h1>
        <ul>
          <li>
            <button className={styles.button} onClick={fetchToGetCookie} disabled={isLoading}>go to siteB</button>
          </li>
          <li>
            cookie value: {cookie}
          </li>
          <li>
            hint: {isLoading ? 'fetching' : 'please click button' }
          </li>
        </ul>
      </main>
    </div>
  )
}