import React, { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { useCartContext } from "../context/cart_context"
import CardStyle from "../app.css"
import axios from "axios"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe("pk_test_51NWCWSSDyc9HQEvYyuTj1AnqJqQsN6IRoEnAWxdwWvQv6fvG7rsknt0jhp8u3Echkc3njm8GRoIjs5FQJ6jaXGKU00CtJVzJs1")

const Stripe_Checkout = () => {
  const { cart, total_amount, shipping_fee } = useCartContext()
  // Stripe Stuff
  const [clientSecret, setClientSecret] = useState("")

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/stripe-payment-intent",
        JSON.stringify({ cart, shipping_fee, total_amount })
      )
      setClientSecret(data.clientSecret)
    } catch (error) {
      // console.log(error.response)
    }
  }

  const appearance = {
    theme: "stripe",
  }
  const options = {
    clientSecret,
    appearance,
  }

  useEffect(() => {
    createPaymentIntent()
  }, [])

  return (
    <section className=" mt28   ">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </section>
  )
}

export default Stripe_Checkout
