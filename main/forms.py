from django import forms

class Register(forms.Form):
    name = forms.CharField(label='Your name', max_length=100)
    email = forms.EmailField(label='Your email', max_length=100)
    password = forms.CharField(label='Your password', widget=forms.PasswordInput())
    password_again = forms.CharField(label='Password again', widget=forms.PasswordInput())