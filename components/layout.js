import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const name = 'Anthony Drummond'
export const siteTitle = 'Anthony\'s Portfolio'

const name_img = 
  <Image
    priority
    src="/images/name_header.png"
    className={utilStyles.borderCircle}
    height={186}
    width={500}
    alt={name}
  />

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <div className={utilStyles.bgWrap}>
        <Image
        alt="Retro Background"
        src="/images/1920x1080_desktop_template.svg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        />
      </div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Anthony Drummond's Portfolio Website"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            },
          }}>
            {name_img}
          </motion.div>
        ) : (
          <>
            <Link href="/">
              <a>
                {name_img}
              </a>
            </Link>
          </>
        )}
      </header>
      <main className={!home ? styles.glowContainer : ''}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout;