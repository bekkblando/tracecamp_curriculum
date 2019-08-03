from django.urls import path
import blog.views as views

urlpatterns = [
    path('create', views.PostCreate.as_view()),
    path('list', views.PostList.as_view()),
    path('update/<int:pk>', views.PostUpdate.as_view()),
    path('delete/<int:pk>', views.PostDelete.as_view()),
]