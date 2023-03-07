import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import style from '@/styles/Dev.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Home(meta: Meta) {

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.desc} />
        <meta name="keywords" content="Breakode, Code, Break, Break Kode, Break Code, Breakode" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta?.desc} />
        <meta property="og:image" content={meta?.image} />
        <meta property="og:url" content={meta?.url} />
        <link rel="canonical" href={meta?.url} />
        <meta property="og:type" content="website" />
      </Head>
      <main className={style.wrapper}>
        <div className={style.__left}>
          <p className={style.title}>Coming Soon</p>
          <h1 className={style.desc}>Our New Website Is On its Way</h1>
          <Link href="https://github.com/breakode" target="_blank" passHref className={style.social_btn}>
            <span>
              <Image
                src="/github.svg"
                alt="Breakode Github"
                height={16}
                width={16}
              />
              github.com/breakode
            </span>
          </Link>
        </div>
        <div className={style.__right}>
          <Image
            src="/forest.jpg"
            alt="forest"
            fill
            sizes="(max-width: 768px) 500px,
              (max-width: 1200px) 50vw,
              100vw"
            priority
          />
        </div>
      </main>
    </>
  );
}

type Meta = {
  title: string
  author: string
  desc: string
  image: string
  url: string
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      meta: {
        title: 'Breakode ID',
        author: 'Syaikhan Agil',
        desc: 'Breakfast and Breakdown w/ code.',
        image: 'https://is3.cloudhost.id/breakode/breakode-credit-2.png',
        url: 'https://breakode.id'
      }
    }
  };
};

export default Home;