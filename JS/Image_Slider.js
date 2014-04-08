
var $slider = $('#sliderUl');


$('#right_arrow').click(function(){
	$slider.animate({
		"margin-left" : "-=310px"	
	},250, function(){
		$slider.append($('#sliderUl li:first')).css("margin-left", 0);
	});
	return false;
});

$('#left_arrow').click(function(){
	$slider.prepend($('#sliderUl li:last')).css("margin-left", "-=310px");
	$slider.animate({
		"margin-left" : 0	
	},250, function(){

	});
	return false;
});
