$(document).ready(function(){
	$('.chev').hover(function() {
		$(this).append($( "<span id='thedot' style='position: relative; top: 1px;'> <i class='ion-chevron-right'></i></span>" )).hide().fadeIn(150);
	}, function() {
		$('#thedot').remove();
	});
	
	//Materialize.toast('CODE JACOB! CODE!', 4000);
	
	$('.logo').hide().fadeIn();
	
	$(".button-collapse").sideNav();
	
	var windsize = $(window).width();
	
	Materialize.toast("Hi, the dev wishes you a nice day", 4000);
	
	if ($(window).width() < 1100) {
		$('.links').css('border-right', 'none');
	} else {
		
	}
	
	//Syncing with Firebase
	
	var ref = new Firebase("https://alphatrend.firebaseio.com/");
	
	//get data from form and send via firebase
	
	var zcompname = "pikwik tech";
	
	// For Firebase make sure you use the [] to sorround the variables.  For example [dashit]
	
	ref.set({[zcompname] : { lastname : "shomstein", email : "sometin@sklfds.com" } });
	
	ref.on('value', function(snapshot) {
		console.log(snapshot.val());
	});
	
});