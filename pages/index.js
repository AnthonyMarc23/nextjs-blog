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
          <p>Hello, I'm Anthony, a Game Designer, UX Designer, front-end web developer. I have a diverse set of skills that I have leveled up over the years, with a strong focus in Game Design and Web Design; other notable areas include storytelling and writing, music and audio production, world building, and small business ownership. My goals are many, but ultimately, leading a design team whether for my own projects or helping somebody else develop their vision makes me the happiest!</p>
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