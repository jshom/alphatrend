$(document).ready(function() {
	Materialize.toast("<p>We believe in modern simplicity and ease, upload your block <br> quickly and easily</p>", 1000, 'teal rounded');
	//Get all the variables
	var name = $('#business_name').val(),
			email = $('#business_email').val(),
			phone = $('#business_phone').val(),
			website = $('#business_wesbite').val(),
			//block
			featured = $('#block_featured').val(),
			section = $('input[name=block_section]'),
			text = $('#block_text').val(),
			link = $('#block_link').val();

			//Firebase refrence
			var firebase = new Firebase('https://alphatrend.firebaseio.com');

			firebase.set("yo" : {yo : "yo"});
			console.log(name + email + phone);
});
