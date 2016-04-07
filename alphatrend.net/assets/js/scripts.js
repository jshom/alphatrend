$(document).ready(function(){
	$('.chev').hover(function() {
		$(this).append($( "<span id='thedot' style='position: relative; top: 1px;'> <i class='ion-chevron-right'></i></span>" )).hide().fadeIn(150);
	}, function() {
		$('#thedot').fadeOut(150).remove();
	});

	//Materialize.toast('CODE JACOB! CODE!', 4000);

	$('.logo').hide().fadeIn();

	$(".button-collapse").sideNav();

	Materialize.toast("Hi, the dev wishes you a nice day", 4000);

	setInterval(function () {
		var windsize = $(window).width();
		if (windsize < 1100) {
			$('.links').css('border-right', 'none');
		} else {
			$('.links').css('border-width', '0');
			$('.links').css('border-right', 'black 5px solid');
			//console.log("BIGGER");
		}
		//console.log(windsize);
	}, 100);

});
