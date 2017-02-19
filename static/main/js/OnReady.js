$(document).ready(function(){
	if(typeof Auth !== undefined) {
		$('#register-form').submit(function(){			
			var form = $(this).serialize()
			Auth.register(form)
			return false
		})
		$('#login-form').submit(function(){			
			var form = $(this).serialize()
			Auth.login(form)
			return false
		})
	}
	
})