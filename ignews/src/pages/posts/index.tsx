import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de Maio de 2022</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>mini paragrafo de explicação</p>
          </a>
          <a href="">
            <time>12 de Maio de 2022</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>mini paragrafo de explicação</p>
          </a>
          <a href="">
            <time>12 de Maio de 2022</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>mini paragrafo de explicação</p>
          </a>
          <a href="">
            <time>12 de Maio de 2022</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>mini paragrafo de explicação</p>
          </a>
          <a href="">
            <time>12 de Maio de 2022</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>mini paragrafo de explicação</p>
          </a>
          <a href="">
            <time>12 de Maio de 2022</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>mini paragrafo de explicação</p>
          </a>
        </div>
      </main>
    </>
  );
}
