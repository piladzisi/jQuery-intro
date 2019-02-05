// $('#flashMessage').hide();
// $('#flashMessage').slideDown(1000);
// $('#flashMessage').delay(3000);
// $('#flashMessage').slideUp();



// $('.blogPage-title').text();
// $('.blogNewPost').html();

// const title = "My First Blog Post";
// const content = "This is my first post";
$('#flashMessage').hide();



$('#previewButton').click(function(){
	const title = $('#blogTitleInput').val();
	const content = $('#blogContentInput').val();
	$('#blogTitlePreview').text(title);
	$('#blogContentPreview').html(content);

	$('#flashMessage')
		.hide()
		.slideDown(1000)
		.delay(3000)
		.slideUp();
})

