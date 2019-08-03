from django.shortcuts import render
from django.http import HttpResponse
from nasacomment.models import Comment
import requests
from datetime import datetime, date, time, timedelta

# Create your views here.
def view_home(request):
    # print("This is the home page", request)
    comments = Comment.objects.all()
    name = "Bekk"
    return render(request, 'very_nice_homepage.html', context = {"comments": comments, "cards": [0, 1, 2], "first_name": name})


def picture_list(request):

    date = datetime.now()
    urls = []
    for num in range(2, 10):
        date = date - timedelta(days = num) 
        date_str = f'{date.year}-{date.month}-{date.day}'
        url = F"https://api.nasa.gov/planetary/apod?api_key=1vqXbgv3amm1ECkbHI3rxkRMhK6yQpZjVhNGBeC9&date={date_str}"
        print(url)
        hd_url = requests.get(url).json()["url"]
        urls.append(hd_url)
    print(urls)
    return render(request, 'picture_list.html', context = {"urls": urls})


def create(request):
    if request.method == "GET":
        # Random picture on the form
        url = request.GET.get('picture_url')
        return render(request, 'form.html', context = {"url": url})
    elif request.method == "POST":
        Comment.objects.create(
            image = request.POST.get('url', ''),
            comment = request.POST.get('comment', 'Default Comment'), 
            rating = request.POST.get('rating', '')
        )
        return HttpResponse("Created")

def retreive_data(request):
    requests.get(url)