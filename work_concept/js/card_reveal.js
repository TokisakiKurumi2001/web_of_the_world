$(function(){
	/*
	* TODO:
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

	function reveal_card_code(card_element)
	{
		$(card_element).click(function(){
			var card_heading_el = card_element + " > .my_card_heading";
			var card_content_el = card_element + " > .my_card_content";
			var card_footer_el = card_element + " > .my_card_footer";
			$(card_heading_el).toggleClass("semi_rounded_top");
			$(card_content_el).slideToggle("slow");
			$(card_footer_el).slideToggle("slow").toggleClass("semi_rounded_btm");
		});
	}

	function run_code(code_btn)
	{
		$(code_btn).click(function(event){
			var code_res = code_btn + " ~ p.code_result";
			event.stopPropagation();
			$(code_res).slideToggle("slow");
		});
	}

	function speech_recognition()
	{
		$("#rec").click(function(event){
			event.stopPropagation();
		});
		$("#stop_rec").click(function(event){
			event.stopPropagation();
		});
	}

	var card = new Array("#single_layer", "#multi_layer", "#cnn", "#rnn", "#speech_recog", "#text_classify");
	var card_have_code = new Array("#tokenization", "#pos", "#dep", "#ner");
	var btn_run_code = new Array("#token_run", "#pos_run", "#dep_run", "#ner_run");

	card.forEach(reveal_card_content);
	card_have_code.forEach(reveal_card_code);
	btn_run_code.forEach(run_code);
	speech_recognition();
});