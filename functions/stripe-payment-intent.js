// Connect to the Stripe payment system
import Stripe from "stripe"
const stripe = new Stripe("sk_test_51NWCWSSDyc9HQEvY9b80XQ7v65UXarHw79gPLPluS1Z5OSiRQG2TiQ4IlgbsK6zGr6VwvohCRU2HbcZrzEYghoJI00yobGfviY")

exports.handler = async (event, context) => {
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body)
  const calculateOrderAmount = () => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return (shipping_fee + total_amount) * 100
  }
  try {
    // Create a PaymentIntent with the order amount and currency
    console.log(stripe)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "INR",
    })

    console.log(paymentIntent)
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
