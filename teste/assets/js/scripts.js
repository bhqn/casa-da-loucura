
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if (element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if ($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({ scrollTop: scroll_to }, 1000);
	}
}


jQuery(document).ready(function () {

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function (e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});

	/*
			Background
	*/
	$('.section-4-container').backstretch("assets/img/backgrounds/bg.jpg");

	/*
		Wow
*/
	new WOW().init();

	/*
	    Carousel
	*/
	$('#carousel-example').on('slide.bs.carousel', function (e) {

		/*
				CC 2.0 License Iatek LLC 2018
				Attribution required
		*/
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 6;
		var totalItems = $('.carousel-item').length;

		if (idx >= totalItems - (itemsPerSlide - 1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i = 0; i < it; i++) {
				// append slides to end
				if (e.direction == "left") {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				}
				else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
	});

});




function item1() {
	document.getElementById("title").innerHTML = "item 1."
	document.getElementById("desc-iten").innerHTML = "Essa é a descrição do item 1."
	document.getElementById("data").innerHTML = "01/01/01"
	document.getElementById("local").innerHTML = "local 1"
	document.getElementById("dimensao").innerHTML = "2,8CM | 1,0CM | 0,1CM"
	var img = document.querySelector("#image");
	img.setAttribute('src', 'https://www.marzipano.net/demos/device-orientation/');

}

function item2() {
	document.getElementById("title").innerHTML = "item 2."
	document.getElementById("desc-iten").innerHTML = "Essa é a descrição do item 2."
	document.getElementById("data").innerHTML = "01/01/02"
	document.getElementById("local").innerHTML = "local 2"
	document.getElementById("dimensao").innerHTML = "2,8CM | 1,0CM | 0,2CM"
	var img = document.querySelector("#image");
	img.setAttribute('src', 'https://www.marzipano.net/demos/hotspot-styles/');

}
function item3() {
	document.getElementById("title").innerHTML = "item 3."
	document.getElementById("desc-iten").innerHTML = "Essa é a descrição do item 3."
	document.getElementById("data").innerHTML = "01/01/03"
	document.getElementById("local").innerHTML = "local 3"
	document.getElementById("dimensao").innerHTML = "2,8CM | 1,0CM | 0,3CM"
	var img = document.querySelector("#image");
	img.setAttribute('src', 'https://www.marzipano.net/demos/device-orientation/');

}
function item4() {
	document.getElementById("title").innerHTML = "item 4."
	document.getElementById("desc-iten").innerHTML = "Essa é a descrição do item 4."
	document.getElementById("data").innerHTML = "01/01/04"
	document.getElementById("local").innerHTML = "local 4"
	document.getElementById("dimensao").innerHTML = "2,8CM | 1,0CM | 0,4CM"
	var img = document.querySelector("#image");
	img.setAttribute('src', 'https://www.marzipano.net/demos/hotspot-styles/');

}
function item5() {
	document.getElementById("title").innerHTML = "item 5."
	document.getElementById("desc-iten").innerHTML = "Essa é a descrição do item 5."
	document.getElementById("data").innerHTML = "01/01/05"
	document.getElementById("local").innerHTML = "local 5"
	document.getElementById("dimensao").innerHTML = "2,8CM | 1,0CM | 0,5CM"
	var img = document.querySelector("#image");
	img.setAttribute('src', 'https://www.marzipano.net/demos/device-orientation/');

}
function item6() {
	document.getElementById("title").innerHTML = "item 6."
	document.getElementById("desc-iten").innerHTML = "Essa é a descrição do item 6."
	document.getElementById("data").innerHTML = "01/01/06"
	document.getElementById("local").innerHTML = "local 6"
	document.getElementById("dimensao").innerHTML = "2,8CM | 1,0CM | 0,6CM"
	var img = document.querySelector("#image");
	img.setAttribute('src', 'https://www.marzipano.net/demos/hotspot-styles/');

}
function item7() {
	document.getElementById("title").innerHTML = "item 7."
	document.getElementById("desc-iten").innerHTML = "Essa é a descrição do item 7."
	document.getElementById("data").innerHTML = "01/01/07"
	document.getElementById("local").innerHTML = "local 7"
	document.getElementById("dimensao").innerHTML = "2,8CM | 1,0CM | 0,7CM"
	var img = document.querySelector("#image");
	img.setAttribute('src', 'https://www.marzipano.net/demos/device-orientation/');

}
function item8() {
	document.getElementById("title").innerHTML = "item 8."
	document.getElementById("desc-iten").innerHTML = "Essa é a descrição do item 8."
	document.getElementById("data").innerHTML = "01/01/08"
	document.getElementById("local").innerHTML = "local 8"
	document.getElementById("dimensao").innerHTML = "2,8CM | 1,0CM | 0,8CM"
	var img = document.querySelector("#image");
	img.setAttribute('src', 'https://www.marzipano.net/demos/hotspot-styles/');
} 