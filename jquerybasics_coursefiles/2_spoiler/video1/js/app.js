//create the "reveal spoiler" button
const $button = $('<button> Reveal Spoiler </button>');
// Append to web page

$('.spoiler').append($button);


$('.spoiler span').hide();
$('.spoiler button').click(function(){
	$('.spoiler span').show();
	$('.spoiler button').hide();
});





