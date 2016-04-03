<?php
  require_once('vendor/composer/autoload.php');

  //Stripe

  $stripe = array(
    "secret_key" => "sk_test_gWmMs82ARuYSetQYdA4UenBw",
    "publishable_key" => "pk_test_PclCRV7IK9qtccmy8LuEHjl5"
  );

  \Stripe\Stripe::setApiKey($stripe['secret_key']);
?>
