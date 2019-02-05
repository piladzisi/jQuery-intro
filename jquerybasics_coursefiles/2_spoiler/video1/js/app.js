//create the "reveal spoiler" button
const $button = $('<button> Reveal Spoiler </button>');
// Append to web page

$('.spoiler').append($button);


$('.spoiler span').hide();

$('.spoiler').on('click', 'button', function(e){
	$(this).prev().show();
	$(e.target).hide();	
});





