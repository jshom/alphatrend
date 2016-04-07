$(document).ready(function() {
	Materialize.toast("<p>We believe in modern simplicity and ease, upload your block <br> quickly and easily</p>", 1000, 'teal rounded');
	//Get all the variables
	var section = "null";

	$('#tech').click(function() {
		section = "tech";
	});
	$('#cooking').click(function() {
		section = "cooking";
	});
	$('#sports').click(function() {
		section = "sports";
	});
	$('#clothing').click(function() {
		section = "clothing";
	});
			//WHEN YOU PAY
			$('#pay').click(function() {
				console.log('Pay clicked');

				var name = $('#business_name').val(),
						email = $('#business_email').val(),
						phone = $('#business_phone').val(),
						website = $('#business_website').val(),
						featured = $('#block_featured').val(),
						text = $('#block_text').val(),
						link = $('#block_link').val(),
						uploadimg = $('#uploadimg').val().base64file();

				var comment = " Connect to Firebase, create business object, insert details, create block object, insert block details ";

				var nameref = new Firebase('https://alphatrend.firebaseio.com/businesses/');

				//Create business object
				var busname = nameref.child(name);

				//Insert all data
				busname.child("business-name").set(name);
				busname.child("business-email").set(email);
				busname.child("business-phone").set(phone);
				busname.child("business-website").set(website);

				//Create business block
				var busblock = busname.child('block');

				busblock.child("featured").set(featured);
				busname.child('block').child("section").set(section);
				busname.child('block').child("product-text").set(text);
				busname.child('block').child("product-link").set(link);
				busname.child('block').child("click").set("0");
			});
});
