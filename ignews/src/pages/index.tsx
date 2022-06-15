import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { stripe } from "../services/stripe";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  console.log({ product });
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
            <span>from {product?.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <Image src="/images/avatar.svg" alt="Girl coding" width={500} height={500} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1LB42TCoEzYk2BkKeclxtvst", {
    expand: ["product"],
  });

  const product = {
    priceId: price?.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price?.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
