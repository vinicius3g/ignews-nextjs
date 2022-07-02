import { loadStripe } from "@stripe/stripe-js";

export async function getstripeJs() {
  const stripeJS = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return stripeJS;
}
