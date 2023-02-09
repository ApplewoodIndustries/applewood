import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Applewood Industries</title>
        <meta name="description" content="Applewood Industries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <picture>
            <source srcSet="/applewood_dark.svg" media="(prefers-color-scheme: light)" />
            <img
              className={styles.logo}
              src="/applewood.svg"
              alt="Applewood Industries Logo"
            />
          </picture>
          <div className={styles.companyName}>
            <h3 className={inter.className}>
              Applewood Industries
            </h3>
          </div>
        </div>
        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about our company's transformative work
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Services <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover the services Applewood Industries can bring your business
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Clients <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Our list of satisfied clients brings confidence to our ability to deliver quality solutions
            </p>
          </a>

          <a
            href="mailto:ceo@applewoodindustries.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get in touch with our team to find out how we can best help you thrive
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
