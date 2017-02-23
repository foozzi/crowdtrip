from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^project/create$', views.create, name='project/create'),
]