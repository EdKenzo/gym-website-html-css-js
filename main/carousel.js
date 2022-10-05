$(document).ready(function (){
	$(".owl-carousel").owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true,
		autoplay:true,
		autoplaySpeed:1000,
		smartSpeed:1500,
		autoplayHoverPause:true
	});
})

$(".btn").on("click", function(e) {
	if(this.hash !== ''){
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate({
			scrollTop:$(hash).offset().top
		},
		800
		);
	}
});