from django.shortcuts import render
from django.template import loader
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib import messages
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.core.validators import validate_email
from django.contrib.auth.decorators import login_required
from .decorators import anonymous_required
from django.contrib.auth import authenticate, logout
from django.contrib.auth import login as auth_login

from .forms import RegisterForm, LoginForm

import ast

def index(request):
	return render(request, 'main/index.html', {'login_form':LoginForm()})

@anonymous_required
def register(request):
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


			messages.success(request, 'You are joined, confirm your account from email')
			HttpResponseRedirect('/register')

		else:
			for err in form.errors:
				messages.warning(request, form.errors[err])
	else:
		form = RegisterForm()
		

	login_form = LoginForm()
	return render(request, 'main/register.html', {'register_form':form, 
												'login_form': login_form})

def activate(request):
	""" TODO ACTIVATING ACCOUNT AFTER REGISTRATION """

def login(request):
	if request.method == 'POST' and not request.user.id:
		form = LoginForm(request.POST)
		if form.is_valid():
			user = authenticate(username=form.cleaned_data.get('username'), 
								password=form.cleaned_data.get('password'))

			if user is not None:
				auth_login(request, user)
				return JsonResponse({
					'errors':None,
					'success':True
				})
			else:
				return JsonResponse({
					'errors':'Invalid credentials or you account is not active, please check mail',
					'success': False
				})
		else:
			return JsonResponse({
				'success':False,
				'errors':dict(ast.literal_eval(form.errors.as_json()))
			})
	else:
		return JsonResponse({
			'success':False,
			'errors':'You now is auth'
		})

""" @TODO fix this, couse after logout, i see error didn't return an HttpResponse object. It returned None instead. """
def logout_(request):
    logout(request)
    HttpResponseRedirect('/')