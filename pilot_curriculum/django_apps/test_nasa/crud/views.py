from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from crud.models import NasaComment
import requests
from django.utils.dateparse import parse_date
from django.shortcuts import redirect

# Create your views here.
def pick_date(request):
    if(request.method == "GET"):
        return render(request, 'date_pick.html')
    elif(request.method == "POST"):
        return redirect(f'/nasa/create/?date={request.POST.get("date")}')


def get_comment(request, id):
    nasa_comment = NasaComment.objects.get(id = id)
    return render(request, 'detail.html', {"nasa_comment": nasa_comment})

def create_comment(request):
    if(request.method == "GET"):
        api_key = "oMrH77hL0IcYFpEAYw6HpzxULiro2VX2jGy9CIMV"
        # We are doing a get request
        date = request.GET.get('date')
        url = requests.get(f'https://api.nasa.gov/planetary/apod?date={date}&api_key={api_key}').json()["url"]
        return  render(request, 'new.html', {'image_url': url, 'date': date})
    elif(request.method == "POST"):
        # Create Comment
        nasa_comment = NasaComment.objects.create(
            comment = request.POST.get('comment'), 
            rating = request.POST.get('rating'), 
            date = parse_date(request.POST.get('date'))
        )
        return redirect(f'/nasa/{nasa_comment.id}')

def update_comment(request, id):
    nasa_comment = NasaComment.objects.get(id = id)
    if(request.method == "GET"):
        api_key = "oMrH77hL0IcYFpEAYw6HpzxULiro2VX2jGy9CIMV"
        # We are doing a get request
        date = nasa_comment.date.strftime("%Y-%M-%d")
        url = requests.get(f'https://api.nasa.gov/planetary/apod?date={date}&api_key={api_key}').json()["url"]
        return  render(request, 'update.html', {'image_url': url, "nasa_comment": nasa_comment})
    elif(request.method == "POST"):
        # Create Comment
        nasa_comment = NasaComment.objects.create(
            comment = request.POST.get('comment'), 
            rating = request.POST.get('rating'), 
            date = parse_date(request.POST.get('date'))
        )
        return redirect(f'/nasa/{nasa_comment.id}')

def list_comments(request):
    nasa_comments = NasaComment.objects.all()
    return render(request, 'list.html', { 'nasa_comments':  nasa_comments}) 

def delete_comment(request, id):
    pass