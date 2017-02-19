var Auth = {
	login: function(form) {
		$.ajax({
			url: '/login',
			data: form,
			dataType: 'json',
			type: 'POST',
			success: function(data) {
				$('.dropdown-login').hide()
				if(!data.success) {
					swal({
					  title: "Error!",
					  text: "Invalid credentials or you account is not active, please check your email",
					  type: "warning",
					  confirmButtonText: "I'm try again"
					});
					$('.showSweetAlert .confirm').click(function(){
						$('.dropdown-login').show()
						return false
					})
				} else {
					window.location.href = '/dashboard'
					return false
				}
			}
		})
		return false
	}
}