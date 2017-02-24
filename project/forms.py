from django import forms
from .models import Project
from helper.models import Categories

from PIL import Image

class ProjectCreateForm(forms.ModelForm):
	title = forms.CharField(max_length=254, required=False)
	amount = forms.CharField(max_length=15, min_length=3, required=True)
	tags = forms.CharField(max_length=125, min_length=5, required=True)	
	category = forms.ModelChoiceField(queryset=Categories.objects.all())
	deadline = forms.CharField(max_length=3, required=True)
	project_image = forms.ImageField(required=True)
	project_description = forms.CharField(max_length=10000, min_length=300, required=True)
	# facebook_url = forms.CharField(max_length=125)
	# twitter_url = forms.CharField(max_length=125)
	# youtube_url = forms.CharField(max_length=125)
	# site_url = forms.CharField(max_length=125)

	class Meta:
		model = Project
		fields = ['title', 'amount', 'tags', 'deadline', 'project_image', 'project_description']

	def clean(self):						
		return self.cleaned_data

	def save(self, commit=True):
		project = super(ProjectCreateForm, self).save(commit=False)
		project.category = self.cleaned_data['category']
		if commit:
			project.save()
			return project