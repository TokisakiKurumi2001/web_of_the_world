$(function(){
	/*
	* TODO:
	*	- Use loop and array to reduce hard-code
	*	- Click on 1 of the el#id will slide down its content and slide in other contents
	*/

	function reveal_card_content(card_element)
	{
		$(card_element).click(function(){
			var card_heading_el = card_element + " > .my_card_heading";
			var card_content_el = card_element + " > .my_card_content";
			$(card_heading_el).toggleClass("semi_rounded_top");
			$(card_content_el).slideToggle("slow").toggleClass("semi_rounded_btm");
		});
	}

	var card = new Array("#single_layer", "#multi_layer", "#cnn", "#rnn", "#speech_recog");

	card.forEach(reveal_card_content);
});