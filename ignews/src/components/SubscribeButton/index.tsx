import { signIn, useSession } from "next-auth/react";
import { FC } from "react";

import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton: FC<SubscribeButtonProps> = ({ priceId }) => {
  const { data: session }  = useSession();

  function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }
  }

  return (
    <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe now
    </button>
  );
};
