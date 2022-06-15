import Head from "next/head";
import Image from 'next/image'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentcontainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>form $9.90 month</span>
          </p>
        </section>
          <Image src="/images/avatar.svg" alt="Girl coding" width={500}
        height={500}/>
      </main>
    </>
  );
}
