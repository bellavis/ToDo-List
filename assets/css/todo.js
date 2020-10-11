//check off Todo's
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delet to do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
		if(event.which === 13){
			let toDoText = $(this).val();
		//creat a new li and add to list
			$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + toDoText  + "</li>");
		}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});
