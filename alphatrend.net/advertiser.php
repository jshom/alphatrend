<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>TheAlphaMarket</title>
  <meta name="author" content="Jacob Shomstein">

  <link rel="stylesheet" href="css/styles.css">

</head>

<body>
	<?php 
		echo "Your block has been paid for and is now being verified for publishing, the block should be online within 24 hours";
		if(isset($_POST)) {
			//general details
			$c_name = $_POST['b_name'];
			$c_name = $_POST['b_phone'];
			$c_email = $_POST['b_email'];
			$c_web = $_POST['b_website'];
			
			//block details
			$b_fet = $_POST['block_featured'];
			$b_div = $_POST['block_section'];
			$b_img = $_POST['block_image'];
			$b_txt = $_POST['block_text'];
			$b_link = $_POST['block_link'];
						
			echo $_POST;
			
		} else {
			exit("sorry, an error has occured");
		}
	?>
</body>
</html>