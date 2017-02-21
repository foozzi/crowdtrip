from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth.decorators import login_required

from .forms import ProfileForm
from account.models import User

@login_required
def index(request):
	profile = User.objects.get(id=request.user.id)
	form = ProfileForm(initial={profile})
	return render(request, 'dashboard/profile.html', 
							{'profile_form':form})

@login_required
def avatar_upload(request):
	if request.method == 'POST':	
		form = ProfileForm(request.FILES)		
		if form.is_valid():
			profile = User.objects.get(id=request.user.id)
			profile.uploadfile = request.FILES['uploadfile']
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
