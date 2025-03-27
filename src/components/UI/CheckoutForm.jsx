import React from "react";
import { useStripe, useElements, cardElements}  from "@stripe/react-stripe-js";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessing(true);


        const { error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(cardElements),
        });

        if (error) {
            console.log(error);
            alert("An error occurred. Please try again.");
        }else {
            console.log(paymentMethod);
            alert("payment successful");
        }
        setIsProcessing(false);
    };

    return (
        <form onSubmit={handlesubmit} className="bg-orange-700 p-5 text-white">
            <CardElement className="p-3 border bk-white rounded"/> 
            <button
                type="submit"
                disabled={!stripe || isProcessing}
                className="mt-4 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
            >

                {isProcessing ? "Processing..." : "Pay Now "}
            </button>
        </form>
    );

}; 

export default CheckoutForm;