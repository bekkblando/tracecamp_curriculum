from django.urls import path
from api import views

urlpatterns = [
    path('hello/', views.hello_world_response),
    path('hello2/', views.hello_world_response),
    path('kickstarterdata/', views.kickstarter_list),
    path('kickstarterdata/<int:id>/', views.kickstarter_campaign_detail),
]