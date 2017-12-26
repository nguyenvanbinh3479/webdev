

// sổ menu khi click vào ảnh 
$(document).ready(function(){
	$('.hind').click(function(){
		$('#banner ul').slideToggle();
	});	
});


//more
$(document).ready(function(){
	$('.fin').click(function(){
		$('.sale .eno1').slideToggle();
		$('.sale .eno').slideToggle();
		$('.sale .eno2').slideToggle();
		$('.sale .eno3').slideToggle();
		$('.shose').slideToggle();
  	});	
});


//show all
$(document).ready(function(){
	$('.mop').click(function(){
		$('.even').slideToggle();
	});	
});



//show all
$(document).ready(function(){
	$('.mol').click(function(){
		$('.even1').slideToggle();
	});	
});