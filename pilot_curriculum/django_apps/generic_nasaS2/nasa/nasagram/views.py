from django.shortcuts import render
from django.views.generic import ListView, CreateView, DetailView, DeleteView, UpdateView, TemplateView
from nasagram.models import NasaComment
from django.urls import reverse_lazy
from django.http import HttpResponse
from nasagram.form.forms import NasaCommentForm
import requests

# Create your views here.

class DatePickerTemplateView(TemplateView):
    template_name = "date_picker.html"


class NasaCommentListView(ListView):
    model = NasaComment

class NasaCommentCreateView(CreateView):

    def __init__(self):
        super().__init__()
        self.image_url = ""

    form_class = NasaCommentForm
    template_name = 'nasagram/nasacomment_form.html'

    def get(self, request):
        date = self.request.GET.get("date_selected", "2019-01-01")
        api_key = "oMrH77hL0IcYFpEAYw6HpzxULiro2VX2jGy9CIMV"
        # We are doing a get request
        r = requests.get(f'https://api.nasa.gov/planetary/apod?date={date}&api_key={api_key}')
        url = r.json()["url"]
        self.image_url = url
        get_response = super().get(request)        
        return get_response

    def get_initial(self, **kwargs):
        initial_form = super().get_initial(**kwargs)
        initial_form['date'] = self.request.GET.get('date_selected', '')
        initial_form['url'] = self.image_url
        return initial_form

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['url'] = self.image_url
        return context

class NasaCommentDetailView(DetailView):
    model = NasaComment

class NasaCommentDeleteView(DeleteView):
    model = NasaComment
    success_url = reverse_lazy('nasa_comment_list')

class NasaCommentUpdateView(UpdateView):
    model = NasaComment
    fields = ["comments", "rating", "favorite"]