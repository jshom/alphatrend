<?php
  require_once('vendor/autoload.php');

  //Stripe

  $stripe = array(
    "secret_key" => "sk_test_gWmMs82ARuYSetQYdA4UenBw",
    "publishable_key" => "pk_test_PclCRV7IK9qtccmy8LuEHjl5  "
  );

  \Stripe\Stripe::setApiKey($stripe['secret_key']);

  //Cloudinary

  \Cloudinary::config(array(
    'cloud_name' => 'def9iqnm4',
    'api_key' => '139544278299624',
    'api_secret' => "5tV-l3OxOb5LEI75DRxcnTL3y00"
  ));
?>
