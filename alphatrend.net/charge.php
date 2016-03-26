<?php
  //requires

  require_once('stripe');


  echo "Your block has been paid for and is now being verified for publishing, the block should be online within 24 hours";
  if(isset($_POST)) {
    //general details
    $img = $_POST['b_name'];

    echo $img;
  } else {
    exit("sorry, an error has occured");
  }

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
    echo('all good');
  } catch(\Stripe\Error\Card $e) {
    // The card has been declined
  }

?>
