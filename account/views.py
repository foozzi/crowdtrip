from django.shortcuts import render
from django.template import loader
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib import messages
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.core.validators import validate_email
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, logout
from django.contrib.auth import login as auth_login

from .forms import RegisterForm, LoginForm

import ast

def index(request):
	register_form = RegisterForm()
	login_form = LoginForm()
	return render(request, 'main/index.html', 
							{'register_form':register_form, 'login_form':login_form})

def register(request):
	if request.method == 'POST':		
		form = RegisterForm(request.POST)
		if form.is_valid():
			confirm_key, email = form.save()
		
			s = send_mail(
			    'Confirmation register in CrowdTrip',
			    'You key: ' + confirm_key,
			    'info@crowdtrip.com',
			    [email],
			    fail_silently=False,
			)
			print(s)
		else:
			return JsonResponse({
				'success':False,
				'errors':dict(ast.literal_eval(form.errors.as_json()))
			})

	return JsonResponse({
		'success':True,
		'errors': None
	})

def activate(request):
	print('ss')

def login(request):
	if request.method == 'POST':
		form = LoginForm(request.POST)
		if form.is_valid():
			user = authenticate(username=form.cleaned_data.get('username'), 
								password=form.cleaned_data.get('password'))

			if user is not None:
				auth_login(request, user)
				return JsonResponse({'errors':None})
			else:
				return JsonResponse({'errors':'Invalid credentials'})
		else:
			return JsonResponse({
				'success':False,
				'errors':dict(ast.literal_eval(form.errors.as_json()))
			})

def logout_view(request):
    logout(request)
    HttpResponseRedirect('/')