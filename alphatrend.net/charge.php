<?php

$comment = "STRIPE PAYMENT";

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey("sk_test_BQokikJOvBiI2HlWgH4olfQ2");

// Get the credit card details submitted by the form
$token = $_POST['stripeToken'];

// Create the charge on Stripe's servers - this will charge the user's card
try {
  $charge = \Stripe\Charge::create(array(
    "amount" => 5000, // amount in cents, again
    "currency" => "usd",
    "source" => $token,
    "description" => "Block on Alphatrend.net"
    ));
} catch(\Stripe\Error\Card $e) {
  // The card has been declined
}

?>
