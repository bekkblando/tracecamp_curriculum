from django.shortcuts import render
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.list import ListView
from blog.models import Post


# Create your views here.
class PostCreate(CreateView):
    model = Post
    fields = ['title', 'body']
    success_url = '/blog/list'


class PostList(ListView):
    model = Post

class PostUpdate(UpdateView):
    model = Post
    fields = ['title', 'body']
    success_url = '/blog/list'


class PostDelete(DeleteView):
    model = Post
    success_url = '/blog/list'