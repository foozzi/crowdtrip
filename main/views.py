from django.shortcuts import render, get_object_or_404
from django.template import loader
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.contrib.auth.models import User
from .forms import RegisterForm
from django.core.mail import send_mail
from django.core.validators import validate_email

def index(request):
	if request.method == 'POST':		
		form = RegisterForm(request.POST)
		
		if form.is_valid():
			confirm_key, email = form.save()
		
			send_mail(
			    'Confirmation register in CrowdTrip',
			    'You key: ' + confirm_key,
			    'info@crowdtrip.com',
			    [email],
			    fail_silently=False,
			)

			return HttpResponseRedirect('/')
		else:
			for err in form.errors:
				messages.warning(request, form.errors[err])
	else:
		form = RegisterForm()
	
	return render(request, 'main/index.html', {'form': form})

