import Head from 'next/head';
import LogoSVG from '../public/logos/ltf-logo.svg';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loyal To Few</title>
        <meta name='description' content='A Trademarked Way Of Life.' />
      </Head>

      <main className={styles.main}>
        <LogoSVG className={styles.logo} />
      </main>
    </div>
  );
}
