from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.contrib import messages

from .forms import ProfileForm, ProfileAvatarForm
from account.models import User

@login_required
def index(request):
	user = User.objects.get(id=request.user.id)
	if request.method == 'POST':		
		form = ProfileForm(request.POST, instance=user)		
		if form.is_valid():			
			res = form.save()
			return HttpResponseRedirect('/dashboard')
		else:
			for err in form.errors:
				print(err)
				messages.warning(request, form.errors[err])
			return HttpResponseRedirect('/dashboard')
	else:
		form = ProfileForm()
		return render(request, 'dashboard/profile.html', 
							{'profile_form':form, 'user':user})

@login_required
def avatar_upload(request):
	if request.method == 'POST':
		form = ProfileAvatarForm(request.POST, request.FILES)
		if form.is_valid():
			profile = User.objects.get(id=request.user.id)
			profile.avatar = request.FILES['avatar']
			profile.save()
			return JsonResponse({
				'errors':None,
				'success':True
			})
		else :
			return JsonResponse({
				'errors':form.errors,
				'success':False
			})
