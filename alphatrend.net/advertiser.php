<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<title>Alpha Market</title>
	<meta name="description" content="Startups and Tastemakers mate here to provide eachother what they want, exposure, sales and new products.">
	<meta name="author" content="Jacob Shomstein">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- Google Font -->
	<link href='https://fonts.googleapis.com/css?family=Arvo:400,700' rel='stylesheet' type='text/css'>

	<!-- Materialize -->
	<link href="assets/css/materialize.min.css" rel="stylesheet">

	<!-- Ionic Icons -->
	<link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">

	<!-- Firebase CDN -->
	<script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>

	<!-- Jquery CDN -->
	<script src="assets/js/jquery.min.js"></script>

	<!-- Custom CSS -->
	<link href="assets/css/advertisers.css" rel="stylesheet">

	<!-- Cloudinary Business -->
	<script src='cloudinary/jquery.ui.widget.js' type='text/javascript'></script>
	<script src='cloudinary/jquery.iframe-transport.js' type='text/javascript'></script>
	<script src='cloudinary/jquery.fileupload.js' type='text/javascript'></script>
	<script src='cloudinary/jquery.cloudinary.js' type='text/javascript'></script>
</head>
<body>
	<script>
		$.cloudinary.config({ cloud_name: 'def9iqnm4', api_key: '139544278299624'});
	</script>

	<h2 class="white-text center headertext">Advertiser Corner</h2>
	<div class="box hoverable white center-align">

			<!-- ------------------ -->
			<!-- The Business' Info -->
			<!-- ------------------ -->

			<h5 class="black-text">General Info</h3>
			<div class="row">
				<div class="input-field col s12">
					<input id="business_name" type="text" class="validate" required="true" name="b_name">
					<label for="business_name">Business Name</label>
        		</div>
      		</div>
	  		<div class="row">
	  			<div class="input-field col s12">
	  				<input type="email" id="business_email" class="validate" name="b_email">
	  				<label for="business_email">Email</label>
        		</div>
      		</div>
	  		<div class="row">
	  			<div class="input-field col s12">
	  				<input id="business_phone" type="tel" class="validate" name="b_phone">
	  				<label for="business_phone">Phone</label>
        		</div>
      		</div>
	  		<div class="row">
	  			<div class="input-field col s12">
	  				<input id="business_website" type="text" class="validate" name="b_website">
	  				<label for="website">Website</label>
        		</div>
      		</div>

      		<!-- ------------------- -->
			<!-- The Business' Block -->
			<!-- ------------------- -->

      		<h5 class="black-text">The Block</h3>

	      	<!-- Featured or nah -->

	      	<div class="row">
	  			<div class="input-field col s12">
	  				<input type="checkbox" class="filled-in" id="block_featured" checked="checked" name="block_featured"/>
	  				<label for="block_featured">Featured</label>
        		</div>
      		</div>

      		<!-- Field -->

	      	<div class="row">
	  			<div class="input-field col s12">
	  				<div class="col s3">
	  					<input name="block_section" type="radio" id="tech" />
	  					<label for="tech">Tech</label>
    				</div>
    				<div class="col s3">
	  					<input name="block_section" type="radio" id="cooking" />
	  					<label for="cooking">Cooking</label>
    				</div>
    				<div class="col s3">
	  					<input name="block_section" type="radio" id="clothing" />
	  					<label for="clothing">Clothing</label>
    				</div>
    				<div class="col s3">
	  					<input name="block_section" type="radio" id="sports" />
	  					<label for="sports">Sports</label>
    				</div>
        		</div>
      		</div>


	      	<!-- IMG -->

	      	<div class="row">
	  			<div class="file-field input-field">
	  				<div class="btn">
	  					<span>Image</span>
	  					<input type="file" name="block_image" class="cloudinary-fileupload" data-cloudinary-field="image_id">
	      			</div>
		  			<div class="file-path-wrapper">
		  				<input class="file-path validate" type="text">
      				</div>
    			</div>
    		</div>

				

      		<!-- Text -->

	  		<div class="row">
	  			<div class="input-field col s12">
	  				<textarea id="block_text" name="block_text" class="materialize-textarea"></textarea>
	  				<label for="textarea1">Product Description</label>
        		</div>
      		</div>

      		<!-- Product Link -->

      		<div class="row">
	  			<div class="input-field col s12">
	  				<input id="block_link" name="block_link" type="text" ></input>
	  				<label for="block_link">Product Link</label>
        		</div>
      		</div>


      		<!-- Pay -->
					<div id="pay">
						<?php require_once('./config.php') ?>
						<form action="charge.php" method="POST">
					  			<script
							    src="https://checkout.stripe.com/checkout.js"
							    class="stripe-button"
							    data-key="<?php echo $stripe['publishable_key']; ?>"
							    data-image="https://pbs.twimg.com/profile_images/1284554204/ALPHA_ICON_00000.png"
							    data-description="Ad Block ($5)"
							    data-amount="500"
							    data-locale="auto">
								</script>
						</form>
					</div>
	</div>




	<!-- Scripts -->
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="assets/js/materialize.min.js"></script>
		<script src="assets/js/vertscript.js"></script>
	</body>
</html>
