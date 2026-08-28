
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("cost-of-living/", views.cost_of_living, name="cost_of_living"),
]