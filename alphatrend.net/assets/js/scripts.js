$(document).ready(function(){
	$('.chev').hover(function() {
		$(this).append($( "<span id='thedot' style='position: relative; top: 1px;'> <i class='ion-chevron-right'></i></span>" )).hide().fadeIn(150);
	}, function() {
		$('#thedot').fadeOut(150).remove();
	});

	//Materialize.toast('CODE JACOB! CODE!', 4000);

	$('.logo').hide().fadeIn();

	$(".button-collapse").sideNav();

	Materialize.toast("Welcome (soft launch state)", 4000);

	setInterval(function () {
		var windsize = $(window).width();
		if (windsize < 1100) {
			$('.links').css('border-right', 'none');
		} else {
			$('.links').css('border-width', '0');
			$('.links').css('border-right', 'black 5px solid');
			//console.log("BIGGER");
		}
		console.log(windsize);
	}, 100);

	//SIDENAV CHECK

	setInterval(function () {
		var windsize = $(window).width();
		if (windsize < 950 && windsize > 385) {
			$('.desk-link').css('display', 'none');
			$('.links').css('margin-left', '10px');
			$('#hip').css('position', 'relative').css('right','50px');
			//console.log("hide");
		} else{
			$('.desk-link').css('display', 'inline');
			$('.links').css('margin-left', '-2px');
			$('#hip').css('position', 'relative').css('right','20px');
			//console.log("show");
		}
	}, 100);

	//LOGO CHECKER and SIZER
	setInterval(function () {
		$('img:first').attr('height', '100px');
		var windsize = $(window).width();
		if (windsize < 1676) {
			$('img:first').attr('src', 'assets/img/imglogo.png').show();
			$('img:first').attr('width', '100px');
			$('img:first').css('margin-top', '10px');
			$('.circle').removeClass('hoverable');
			$('img:first').removeClass('fixlogocenter');
			$('img:first').removeClass('fixlogocentersmall');
			$('img:first').removeClass('fixlogocentersmaller');
			$('img:first').removeClass('fixlogocentersmallerer');
			if (windsize < 950 && windsize > 800) {
				$('img:first').removeClass('fixlogocentersmallerer');
				$('img:first').removeClass('fixlogocentersmaller');
				$('img:first').removeClass('fixlogocentersmall');
				$('img:first').addClass('fixlogocenter');
			} else if (windsize < 800 && windsize > 730) {
				$('img:first').removeClass('fixlogocentersmallerer');
				$('img:first').removeClass('fixlogocentersmaller');
				$('img:first').removeClass('fixlogocenter');
				$('img:first').addClass('fixlogocentersmall');
			} else if (windsize < 730 && windsize > 635) {
				$('img:first').removeClass('fixlogocentersmallerer');
				$('img:first').removeClass('fixlogocentersmall');
				$('img:first').removeClass('fixlogocenter');
				$('img:first').addClass('fixlogocentersmaller');
			} else if (windsize < 635 && windsize > 600) {
				$('img:first').removeClass('fixlogocentersmaller');
				$('img:first').removeClass('fixlogocentersmall');
				$('img:first').removeClass('fixlogocenter');
				$('img:first').addClass('fixlogocentersmallerer');
			}
		} else {
			$('img:first').attr('src', 'assets/img/logo.png');
			$('img:first').attr('width', '200px');
			$('.circle').addClass('hoverable');
			$('img:first').css('margin-top', '0px');
			$('img:first').removeClass('fixlogocenter');
			$('img:first').removeClass('fixlogocentersmall');
			$('img:first').removeClass('fixlogocentersmaller');
			$('img:first').removeClass('fixlogocentersmallerer');
		}
	}, 100);

	$('.s3').children().hover(
		function() {
		$(this).not('h4').fadeTo(150, 0.5, function() {
			//done
		})
	}, function() {
		$(this).not('h4').fadeTo(150, 1, function() {
			//done
		})
	});


	//PERSONAL EDITS


	//Firefly Pic Image change
/*$('#fireflypic').attr('src', 'assets/img/fire2.jpg').delay(2000).attr('src', 'assets/img/fire3.jpg').delay(2000).attr('src', 'assets/img/fire1.jpg').delay(2000);

	setInterval(function () {
		$('#fireflypic').attr('src', 'assets/img/fire2.jpg').delay(2000).attr('src', 'assets/img/fire3.jpg').delay(2000).attr('src', 'assets/img/fire1.jpg').delay(2000);
		console.log('woop');
	}, 000)*/
});
