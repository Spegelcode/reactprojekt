import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



const stripePromise = loadStripe(pk_test_51R7Cog2YSZsKT8ZB6B8VFBsdxoplHKS4Wzl73WshT2x7vVnwf6Pxl0ZB4tjV5JLPgepmx8vyTt4HXVWZMDzVaQk500qdimT8OZ);


const Checkout = () => {
    return (
        <Elements stripe = {stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}; 

export default Checkout; 