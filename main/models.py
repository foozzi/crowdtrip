from django.db import models

class Register(models.Model):
	#
	def __str__(self):
		return self.name