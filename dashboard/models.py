from django.db import models
from django.utils import timezone

class Profile():
	def edit_profile(self):
		""" @TODO """

	def handle_uploaded_file(f):
	    with open(settings.AVATAR_UPLOAD_DIR, 'wb+') as destination:
	        for chunk in f.chunks():
	            destination.write(chunk)