from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from nasa.models import NasaComments
from django.http import HttpResponse

# Create your views here.
class NasaDetailView(DetailView):
    model = NasaComments
    pk_url_kwarg = "id"

    def get(self, request, *args, **kwargs):
        id = kwargs['id']
        return HttpResponse("Override good functionality")

class NasaCommentListView(ListView):
    model = NasaComments


class NasaCreateView(CreateView):
    model = NasaComments
    fields = ['comment', 'rating', 'image_url', 'date']
    success_url = reverse_lazy('nasa_list')

class NasaUpdateView(UpdateView):
    model = NasaComments
    fields = ['comment', 'rating', 'image_url', 'date']
    success_url = reverse_lazy('nasa_list')
    pk_url_kwarg = "id"

class NasaDeleteView(DeleteView):
    model = NasaComments
    success_url = reverse_lazy('nasa_list')
    pk_url_kwarg = "id"