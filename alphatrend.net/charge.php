<?php
  //requires

  //require_once('config.php');
  $busname = $_POST["name"];

  mkdir($busname);

  if(isset($_POST)) {
    $to = 'assets/' . 'img/' . $_POST["name"] . basename($_FILES['block_image']['name']);
    echo "sent <br />";
    if (move_uploaded_file($_FILES['block_image']['tmp_name'], $to)) {
      echo "good";
    } else {
      echo 'bad';
    }
  }


  // Get the credit card details submitted by the form
  /*$token = $_POST['stripeToken'];

  // Create the charge on Stripe's servers - this will charge the user's card
  try {
    $charge = \Stripe\Charge::create(array(
      "amount" => 5000, // amount in cents, again
      "currency" => "usd",
      "source" => $token,
      "description" => "Block on Alphatrend.net"
    ));
    echo "Your block has been paid for and is now being verified for publishing, the block should be online within 24 hours";
  } catch(\Stripe\Error\Card $e) {
    // The card has been declined
  }*/

?>
