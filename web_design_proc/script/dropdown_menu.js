$(function(){
   var trigger = new Array("intro", "content", "about");
   trigger.forEach(trigger_dropdown_menu);

   function trigger_dropdown_menu(string)
   {
       var trigger_btn = "#trig_" + string + "_drop";
       var dropdown_menu = "#" + string + "_drop";
       $(trigger_btn).click(function(){
           $(dropdown_menu).slideToggle(500);
           console.log(dropdown_menu);
       });
   }
});