from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^dashboard$', views.index, name='dashboard'),
    url(r'^avatar_upload$', views.avatar_upload, name='avatar_upload'),
]