<?php
  require_once('vendor/autoload.php');

  $stripe = array(
    "secret_key" => "sk_test_XPdTmSS0nCqdbHxmcZ7PbqLA",
    "publishable_key" => "pk_test_hEaMQmVaXP0EfNhoaXR06BTl "
  );

  \Stripe\Stripe::setApiKey($stripe['secret_key']);
?>
