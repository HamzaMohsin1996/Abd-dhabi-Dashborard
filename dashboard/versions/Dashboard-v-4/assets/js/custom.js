$(document).ready(function() {
 
	$("#select-all").click(function() {
		   $(".modal-content-inner").toggleClass("main-content-inner-chechked"); 
	 });
	$(".checkmark").click(function() {
		   $(this).parent().toggleClass("checked"); 
	 });
	
});