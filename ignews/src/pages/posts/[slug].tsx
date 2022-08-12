import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { getPrismicClient } from "../../services/prismic";
import { PrismicRichText } from "@prismicio/react";
import Head from "next/head";

import styles from "./post.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: [];
    updatedAt: boolean;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post?.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post?.title}</h1>
          <time>{post?.updatedAt}</time>

          <div className={styles.postContent}>
            <PrismicRichText field={post.content} />
          </div>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const session = await getSession({ req });
  const { slug } = params;

  // if (!session) {
  // }

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID("post", String(slug), {});

  // console.log(JSON.stringify(response, null, 2))

  const post = {
    slug,
    title: response.data?.Title,
    content: response.data.Content,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  return {
    props: { post },
  };
};
