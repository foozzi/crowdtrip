from django.db import models
from django.utils import timezone
from django.conf import settings
from helper.models import Categories

class Project(models.Model):
	title = models.CharField(max_length=254, unique=False)
	amount = models.IntegerField(max_length=15)
	tags = models.CharField(max_length=125)
	category = models.ForeignKey(Categories)
	deadline = models.IntegerField(max_length=3)
	project_image = models.ImageField(upload_to=settings.PROJECT_UPLOAD_DIR + '/%Y/%m/%d', blank=False)
	project_description = models.TextField(max_length=10000)
	facebook_url = models.CharField(max_length=125)
	twitter_url = models.CharField(max_length=125)
	youtube_url = models.CharField(max_length=125)
	site_url = models.CharField(max_length=125)
	is_active = models.BooleanField(default=False)
	date_create = models.DateTimeField(default=timezone.now)