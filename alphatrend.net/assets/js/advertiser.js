$(document).ready(function() {
	Materialize.toast("<p>We believe in modern simplicity and ease, upload your block <br> quickly and easily</p>", 1000, 'teal rounded');
	//Get all the variables


			//Firebase refrence
			var firebase = new Firebase('https://alphatrend.firebaseio.com');

			//Test
			//firebase.set({'bo' :{yo :"yo"}});
			//console.log(name + email + phone);

			$('#pay').click(function() {
				console.log('pay clicked!');

				firebase.set({'bo' :{yo :"yo"}});

				var name = $('#business_name').val(),
						email = $('#business_email').val(),
						phone = $('#business_phone').val(),
						website = $('#business_wesbite').val(),
						//block
						featured = $('#block_featured').val(),
						section = $('input[name=block_section]'),
						text = $('#block_text').val(),
						link = $('#block_link').val();

				//SEND TO FIREBASE
				firebase.set({[name] : {
					"email" : [email],
					"phone" : [email],
					"website" : [phone],
					"block" : {
						"featured" : [featured],
						"section" : [section],
						"text" : [text],
						"link" : [link]
					}
				}});
			});
});
