from django.urls import path
from nasacomment import views

urlpatterns = [
    path('home',views.view_home),
    path('picture_list',views.picture_list),
    path('create',views.create),
    # path('update',views.update)
]