from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
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

	"db map"
	email = models.EmailField(unique=True, db_index=True)
	joined = models.DateTimeField(auto_now_add=True)
	username = models.CharField(unique=True, max_length=100)
	first_name = models.CharField(max_length=100, default=None)
	last_name = models.CharField(max_length=100, default=None)
	confirm_key = models.CharField(max_length=155, unique=True)
	is_active = models.BooleanField(default=False)
	is_admin = models.BooleanField(default=False)
	is_staff = models.BooleanField(default=False)
	is_superuser = models.BooleanField(default=False)

	USERNAME_FIELD = 'email'

	def __unicode__(self):
		return self.email

	def username_present(username):
		if User.objects.filter(username=username).exists() == False:
			return True

		return False

	def email_present(email):
		if User.objects.filter(email=email).exists() == False:
			return True

		return False

	def generate_activation_key(email):
		chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'
		secret_key = get_random_string(20, chars)
		return hashlib.sha256((secret_key + email).encode('utf-8')).hexdigest()

	def get_short_name(self):
		"Returns the short name for the user."
		return self.email