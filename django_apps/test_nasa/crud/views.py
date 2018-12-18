from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from crud.models import NasaComment
import requests

# Create your views here.
def get_comment(request, id):
    response_value = serializers.serialize("json", NasaComment.objects.filter(id = id))
    return HttpResponse(response_value)

def create_comment(request):
    if(request.method == "GET"):
        api_key = "oMrH77hL0IcYFpEAYw6HpzxULiro2VX2jGy9CIMV"
        # We are doing a get request
        date = "2017-06-13"
        url = requests.get(f'https://api.nasa.gov/planetary/apod?date={date}&api_key={api_key}').json()["url"]
        return  render(request, 'new.html', {'image_url': url, 'date': date})
    elif(request.method == "POST"):
        # Create Comment
        return render(request, 'polls/detail.html', {'question': question})

def update_comment(request, id):
    pass

def list_comments(request):
    pass

def delete_comment(request, id):
    pass