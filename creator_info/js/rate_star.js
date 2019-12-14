$(function(){
	// Hover
	$(".star_rating li").on("mouseover", function(){
		$(this).addClass("hover");
		var onStar = $(this).data('value');
		$(this).parent().children("li.star").each(function(event){
			if (event < onStar) {
				$(this).addClass("hover");
			}else{
				$(this).removeClass("hover");
			}
		});
	});

	$(".star_rating li").on("mouseout", function(){
		$(this).removeClass("hover");
		$(this).parent().children("li.star").each(function(){
			$(this).removeClass("hover");
		});
	});

	// Click
	$(".star_rating li").on("click", function(){
		$(this).addClass("selected");
		var onStar = $(this).data('value');
		$(this).parent().children("li.star").each(function(event){
			if (event < onStar) {
				$(this).addClass("selected");
			}else{
				$(this).removeClass("selected");
			}
		});
		$("#star_rate_res").val(onStar);
	});
});