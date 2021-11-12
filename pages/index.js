import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

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
      <div className={utilStyles.bgWrap}>
        <Image
          alt="Retro Background"
          src="/images/1920x1080_desktop_template.svg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello, I'm Anthony, a Front-End Developer that has experience in Angular, Vue, React, and Next.js.</p>
          <p>I code and game, as well as excel at UX principals. More will come shortly.</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}