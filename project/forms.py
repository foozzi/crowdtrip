from django import forms
from .models import Project

from PIL import Image

class ProjectCreateForm(forms.ModelForm):
	title = forms.CharField(min_length=20, max_length=254, required=True)
	amount = forms.CharField(max_length=15, min_length=3, required=True)
	tags = forms.CharField(max_length=125, min_length=5, required=True)	
	deadline = forms.CharField(max_length=3, required=True)
	project_image = forms.ImageField(required=True)
	project_description = forms.CharField(max_length=10000, min_length=1000, required=True)
	facebook_url = forms.CharField(max_length=125)
	twitter_url = forms.CharField(max_length=125)
	youtube_url = forms.CharField(max_length=125)
	site_url = forms.CharField(max_length=125)

	class Meta:
		model = Project
		fields = ['title', 'amount', 'tags', 'deadline', 'project_image', 'project_description']

	def clean(self):						
		return self.cleaned_data

	def save(self, commit=True):
		user = super(ProjectCreateForm, self).save(commit=False)
		if commit:
			user.save()
			return user