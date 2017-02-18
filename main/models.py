from django.contrib.auth.models import (AbstractBaseUser, PermissionsMixin,
										BaseUserManager)
from django.core.mail import send_mail
from django.core import validators
from django.db import models
from django.utils import timezone
from django.utils.crypto import get_random_string

import hashlib

class UserAccountManager(BaseUserManager):

	def create_user(self, email, password=None):
		if not email:
			raise ValueError('Email must be set!')
		user = self.model(email=email)
		user.set_password(password)
		user.save(using=self._db)
		return user

	def create_superuser(self, email, password):
		user = self.create_user(email, password)
		user.is_admin = True
		user.is_staff = True
		user.is_active = True
		user.is_superuser = True
		user.save(using=self._db)
		return user

	def get_by_natural_key(self, email_):
		return self.get(email=email_)	

class User(AbstractBaseUser, PermissionsMixin):
	objects = UserAccountManager()
	
	username = models.CharField(max_length=30, unique=True)
	first_name = models.CharField(max_length=100)
	last_name = models.CharField(max_length=100)
	email = models.EmailField(max_length=254, unique=True)
	is_staff = models.BooleanField(default=False)
	is_active = models.BooleanField(default=True)
	date_joined = models.DateTimeField(default=timezone.now)
	confirm_key = models.CharField(max_length=254, unique=True)

	USERNAME_FIELD = 'username'
	REQUIRED_FIELDS = ['email']

	class Meta:
		verbose_name = 'user'
		verbose_name_plural = 'users'

	def __unicode__(self):
		return self.email

	def generate_activation_key(email):
		chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'
		secret_key = get_random_string(20, chars)
		return hashlib.sha256((secret_key + email).encode('utf-8')).hexdigest()

	def get_full_name(self):
		"""
		Returns the first_name plus the last_name, with a space in between.
		"""
		full_name = self.first_name + ' ' + self.last_name
		return full_name.strip()

	def get_short_name(self):
		"Returns the short name for the user."
		return self.username.strip()

	def email_user(self, subject, message, from_email=None):
		"""
		Sends an email to this User.
		"""
		send_mail(subject, message, from_email, [self.email])