var Auth = {
	register: function(form) {
		$.ajax({
			url: '/register',
			data: form,
			dataType: 'json',
			type: 'POST',
			success: function(data) {
				// var res = $.parseJSON(data.errors)
				console.log(data)
				// if(res !== null) {
				// 	for(var i = 0; res.length > i; i++) {
				// 		console.log(res)
				// 	}
				// }
			}
		})
		return false
	},
	login: function(form) {
		$.ajax({
			url: '/login',
			data: form,
			dataType: 'json',
			type: 'POST',
			success: function(data) {
				var obj = $.parseJSON(data)
				if(obj.errors !== null) {
					for(var i = 0; obj.errors.length > i; i++) {

					}
				}
				console.log(obj)
			}
		})
		return false
	}
}