// This is your test secret API key.
const stripe = Stripe("pk_test_51PjJdLLpmU8B4A31DbcpWiR14jowjUGi0s4xVbUpewL73kqBUNpIVE94wpqWDKM384gd3mrBOFHPlKBXaqZgTP1Z0021CnE1yb");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}