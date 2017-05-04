$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


$('.year--content').each(function(){
	$(this).hide();

	if($(this).attr('id') == 'year-1'){
		$(this).show();
	}
});

$('.timeline--year a').on('click', function(e){
	e.preventDefault();

	$('.timeline--year a').removeClass('active');
	$(this).addClass('active');

	var year = $(this).attr('data-year'); 

	$('.year--content').each(function(){
		$(this).hide();

		if($(this).attr('id') == year){
			$(this).show();
		}
	});
});