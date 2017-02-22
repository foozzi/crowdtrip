$(document).ready(function(){
	if($('#avatar-change').length > 0) {
		var uploader = new ss.SimpleUpload({
	        button: '#avatar-change',
	        url: '/dashboard/avatar_upload',
	        name: 'avatar',
	        multipart: true,
	        hoverClass: 'hover',
	        focusClass: 'focus',
	        responseType: 'json',
	        allowedExtensions: ['jpeg','jpg', 'png', 'gif'],
	        data: {'csrfmiddlewaretoken':$('input[name="csrfmiddlewaretoken"]').val()},
	        startXHR: function() {
	            // progressOuter.style.display = 'block'; // make progress bar visible
	            // this.setProgressBar( progressBar );
	        },
	        onSubmit: function() {
	            // msgBox.innerHTML = ''; // empty the message box
	            // $('#avatar-change').innerHTML = 'Uploading...'; // change button text to "Uploading..."
	          },
	        onComplete: function( filename, response ) {
	            // $('#avatar-change').innerHTML = 'Choose Another File';
	            location.reload()
	            return false
	            // progressOuter.style.display = 'none'; // hide progress bar when upload is completed
	            // if ( !response ) {
	            //     msgBox.innerHTML = 'Unable to upload file';
	            //     return;
	            // }
	            // if ( response.success === true ) {
	            //     msgBox.innerHTML = '<strong>' + escapeTags( filename ) + '</strong>' + ' successfully uploaded.';
	            // } else {
	            //     if ( response.msg )  {
	            //         msgBox.innerHTML = escapeTags( response.msg );
	            //     } else {
	            //         msgBox.innerHTML = 'An error occurred and the upload failed.';
	            //     }
	            // }
	          },
	        onError: function() {
	            // progressOuter.style.display = 'none';
	            // msgBox.innerHTML = 'Unable to upload file';
	          }
		});
	}
})