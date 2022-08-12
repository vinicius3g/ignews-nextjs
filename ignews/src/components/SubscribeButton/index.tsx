import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { api } from "../../services/api";
import { getstripeJs } from "../../services/stripe-js";

import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton: FC<SubscribeButtonProps> = ({ priceId }) => {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
      router.push("/posts");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getstripeJs();

      stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe now
    </button>
  );
};
