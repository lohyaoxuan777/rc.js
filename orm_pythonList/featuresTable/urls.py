from django.urls import path
from . import views

urlpatterns = [
    path('featuresTable/', views.index, name='index'),
]