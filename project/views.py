from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.contrib import messages

from helper.models import Categories

from .forms import ProjectCreateForm, ProjectPerksForm

@login_required
def create(request):
	if request.method == 'POST':		
		print(request.POST)
		form = ProjectCreateForm(request.POST, request.FILES)
		if form.is_valid():			
			res = form.save()
		
			return HttpResponseRedirect('/project/create')
		else:
			for err in form.errors:
				messages.warning(request, form.errors[err])
			return HttpResponseRedirect('/project/create')
	else:
		categories = Categories.objects.all()
		form = ProjectCreateForm()
		return render(request, 'project/create.html', {'categories':categories})
