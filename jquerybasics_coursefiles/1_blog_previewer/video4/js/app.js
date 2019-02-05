// $('#flashMessage').hide();
// $('#flashMessage').slideDown(1000);
// $('#flashMessage').delay(3000);
// $('#flashMessage').slideUp();

$('#flashMessage')
	.hide()
	.slideDown(1000)
	.delay(3000)
	.slideUp();

$('.blogPage-title').text();
$('.blogNewPost').html();

const title = "My First Blog Post";
// const content = "This is my first post";

$('#blogTitlePreview').text(title);
$('#blogContentPreview').html("This is my <strong>first</strong> post");