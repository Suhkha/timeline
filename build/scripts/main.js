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


var source = $("#timeline_list").html();

$.ajax({
	dataType: "json",
	url: "http://localhost/wp_quaker/wp-json/wp/v2/posts?categories=72"
}).done(function(data,html){
        // render the template and data, append it to your target in the DOM
        var template = Handlebars.compile(source);

        for (var i = 0; i < data.length; i++) {

        	for (var j = 0; j < data[i]['acf']['timeline_content'].length; j++) {

        		var img = data[i]['acf']['timeline_content'][j]['imagen']['url'];
        		var content = data[i]['acf']['timeline_content'][j]['contenido'];
        		var id = "year-"+[i];

        		var timeline = {
        			years: [{
        				id: id,
        				img: img,
        				content: content
        			}]
        		};
        		$('.timeline--content').append(template(timeline));
        	}
        }




        
    });

