from django.db import models

class Categories(models.Model):
	id = models.IntegerField(primary_key=True)
	name = models.CharField(max_length=75, unique=True)	

	REQUIRED_FIELDS = ['name']

	class Meta:
		verbose_name = 'category'
		verbose_name_plural = 'categories'

	def __str__(self):
		return self.name
