$(function(){
	/*
	* TODO:
	*	- Use loop and array to reduce hard-code
	*	- Click on 1 of the el#id will slide down its content and slide in other contents
	*/
	$("#single_layer").click(function(){
		$("#single_layer > .my_card_heading").toggleClass("semi_rounded_top");
		$("#single_layer > .my_card_content").slideToggle("slow");
		$("#single_layer > .my_card_content").toggleClass("semi_rounded_btm");
	});

	$("#multi_layer").click(function(){
		$("#multi_layer > .my_card_heading").toggleClass("semi_rounded_top");
		$("#multi_layer > .my_card_content").slideToggle("slow");
		$("#multi_layer > .my_card_content").toggleClass("semi_rounded_btm");
	});

	$("#cnn").click(function(){
		$("#cnn > .my_card_heading").toggleClass("semi_rounded_top");
		$("#cnn > .my_card_content").slideToggle("slow");
		$("#cnn > .my_card_content").toggleClass("semi_rounded_btm");
	});

	$("#rnn").click(function(){
		$("#rnn > .my_card_heading").toggleClass("semi_rounded_top");
		$("#rnn > .my_card_content").slideToggle("slow");
		$("#rnn > .my_card_content").toggleClass("semi_rounded_btm");
	});
});