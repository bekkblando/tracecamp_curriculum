from django.urls import path

from . import views

urlpatterns = [
    path('', views.kickstarter_list),
    path('<int:pk>/', views.kickstarter_detail),
]