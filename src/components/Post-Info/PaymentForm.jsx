import React from 'react';

import Typography from '@material-ui/core/Typography';
import { PayPalButton } from "react-paypal-button-v2";

export default function PaymentForm() {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <PayPalButton
        amount="0.01"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
    </div>
    
  );
}
