from django.shortcuts import render, get_object_or_404
from django.template import loader
from django.http import HttpResponseRedirect
from .forms import Register

def index(request):
	form = Register()
	return render(request, 'main/index.html', {'form': form})