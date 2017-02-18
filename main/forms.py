from django import forms
from .models import User

class RegisterForm(forms.ModelForm):
	username = forms.CharField(label='Your name', max_length=100, min_length=3)
	first_name = forms.CharField(label='Your first name', max_length=100, min_length=3)
	last_name = forms.CharField(label='Your last name', max_length=100, min_length=3)
	email = forms.EmailField(label='Your email', max_length=100, min_length=5)
	password = forms.CharField(label='Your password', widget=forms.PasswordInput(), max_length=100, min_length=6)
	password_again = forms.CharField(label='Password again', widget=forms.PasswordInput(), max_length=100, min_length=6)

	class Meta:
		model = User
		fields = ['email', 'password', 'username', 'first_name', 'last_name']

	def clean(self):
		password = self.cleaned_data.get('password')
		password_again = self.cleaned_data.get('password_again')

		if password != password_again:
			raise forms.ValidationError('Password is not identical')

		#todo
		#if not (User.username_present(self.cleaned_data['username']) == True or User.email_present(self.cleaned_data['email']) == True):
		#	raise forms.ValidationError('User existing, please login')

		return self.cleaned_data

	def save(self, commit=True):
		user = super(RegisterForm, self).save(commit=False)
		user.set_password(self.cleaned_data['password'])
		user.confirm_key = User.generate_activation_key(self.cleaned_data['email'])
		if commit:
			user.save()
			return user.confirm_key, user
