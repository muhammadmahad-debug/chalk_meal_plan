import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    if (req.method != "POST") return res.status(400);
    const {
      name,
      email,
      line1,
      line2,
      city,
      state,
      postal_code,
      paymentMethod,
    } = req.body;

    // Create a customer
    const customer = await stripe.customers.create({
      email,
      name,
      address: {
        line1,
        line2,
        city,
        state,
        postal_code,
      },
      payment_method: paymentMethod,
      invoice_settings: { default_payment_method: paymentMethod },
    });
    // Create a subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: "price_1NlXr9KRsEKMHleBgVFFzFGy",
        },
      ],

      payment_settings: {
        payment_method_types: ["card"],
        save_default_payment_method: "on_subscription",
      },
      expand: ["latest_invoice.payment_intent"],
    });
    // Send back the client secret for payment
    res.json({
      message: "Subscription successfully initiated",
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
