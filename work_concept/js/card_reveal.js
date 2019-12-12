$(function(){
	$(".my_card_heading").click(function(){
		$(".my_card_heading").toggleClass("semi_rounded_top");
		$(".my_card_content").slideToggle("slow");
		$(".my_card_content").toggleClass("semi_rounded_btm");
	});
});