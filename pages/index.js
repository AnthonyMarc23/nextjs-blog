import Link from 'next/link';
import Head from 'next/head';
// import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
// import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <p>Hello, I'm Anthony, a UX Designer and front-end web developer. I like to work in Next.js, React, and Vue, and also have some skills with Angular. I have a diverse set of skills that I have leveled up over the years, with a strong focus in UX Design and Game Design, and other notable areas including story telling and writing, music and audio production, world building, and small business ownership. Take a look at some of my projects below!</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, title }) => (
              <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
            </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}