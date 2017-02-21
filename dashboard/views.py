from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse

from .forms import ProfileForm, AvatarForm
from account.models import User

def index(request):
	profile = User.objects.get(id=request.user.id)
	form = ProfileForm(initial={profile})
	form_avatar = AvatarForm()
	return render(request, 'dashboard/profile.html', 
							{'profile_form':form, 'avatar_form': form_avatar})

def avatar_upload(self):
	if request.method == 'POST':
		form = AvatarForm(request.FILES)
		if form.is_valid():
			handle_uploaded_file(request.FILES['file'])
			return JsonResponse({
				'errors':None,
				'success':True
			})