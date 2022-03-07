import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

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
        <div className={utilStyles.container}>
          <section className={utilStyles.about}>
            <p>Hello, I'm Anthony, a Game Designer, UX Designer, and front-end web developer. I have a diverse set of skills that I have leveled up over the years, with a strong focus in Game Design and Web Design; other notable areas include storytelling and writing, music and audio production, world building, and small business ownership. My goals are many, but ultimately, leading a design team to produce projects of my vision or helping somebody develop their vision makes me the happiest!</p>
          </section>
          <section className={`${utilStyles.homeMenu} ${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, title }) => (
                <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <h2><a>{title}</a></h2>
                </Link>
              </li>
              ))}
            </ul>
          </section>
        </div>
      </Layout>
    </>
  )
}