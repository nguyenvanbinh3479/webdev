
$(document).ready(function() {
	$('.menu-1 li').hover(function() {
		$(this).children('.sub-menu').stop().fadeToggle();
	});
});

$(document).ready(function(){
	$(".hind").click(function(){
		$(".menu-1").slideToggle();
	})
})