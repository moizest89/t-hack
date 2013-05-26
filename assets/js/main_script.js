$(document).ready(function(){
	 height_form_index();
	 var d = new Date();
      $('h2#time_actual').text(d);
});

$(window).resize(function(){
	height_form_index();
});


function height_form_index () {
	var height_page = $(document).height(); 
	var width_page = $(window).width(); 
	$('span#page_center,span#presentation_logo').css({
		width:width_page,
		height:height_page
	});
}

