"""test_nasa URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from crud import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('nasa/', views.list_comments),
    path('nasa/<int:id>', views.get_comment),
    path('nasa/update/<int:id>', views.update_comment),
    path('nasa/delete/<int:id>', views.delete_comment),
    path('nasa/create/', views.create_comment, name = 'create_comment'),
    path('nasa/pickdate/', views.pick_date, name = 'pick_date'),
]
