from django import forms
from .models import Profile
from account.models import User
from account.forms import RegisterForm

from PIL import Image

class ProfileAvatarForm(forms.Form):
	avatar = forms.ImageField(required=True)

	class Meta:
		model = User
		fields = ['avatar']

	def clean(self):				
		
		return self.cleaned_data

	def save(self, commit=True):
		user = super(ProfileAvatarForm, self).save(commit=False)
		if commit:
			user.save()
			return user


class ProfileForm(forms.ModelForm):

	username = forms.CharField(label='Your login', max_length=100, min_length=3, required=True)
	first_name = forms.CharField(label='Your first name', max_length=100, min_length=3, required=True)
	last_name = forms.CharField(label='Your last name', max_length=100, min_length=3, required=True)
	email = forms.EmailField(label='Your email', max_length=100, min_length=5, required=True)
	password = forms.CharField(required=False)
	password_again = forms.CharField(required=False)	
	bio = forms.CharField(widget=forms.Textarea, required=False)

	class Meta:
		model = User
		fields = ['email', 'username', 'first_name', 'last_name', 'bio']

	def clean(self):				
		
		return self.cleaned_data

	def save(self, commit=True):
		user = super(ProfileForm, self).save(commit=False)
		if commit:
			user.save()
			return user