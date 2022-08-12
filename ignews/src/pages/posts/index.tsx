import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getPrismicClient } from "../../services/prismic";

import styles from "./styles.module.scss";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};
interface PostProps {
  posts: Post[];
}

export default function Posts({ posts }: PostProps) {
  console.log({ posts });
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

//TODO: ajustar o retorno da api para pegar os resultados corretos
//TODO: tarsnformar o metodo de captura dos dados para nova versao do nextJs

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType("post");

  const posts = response?.map((post) => {
    return {
      slug: post.uid,
      title: post.data.Title,
      excerpt:
        post.data.Content.find((content) => content.type === "paragraph")?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    props: { posts },
  };
};
