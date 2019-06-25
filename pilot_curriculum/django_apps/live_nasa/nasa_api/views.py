from django.shortcuts import render
from django.http import HttpResponse
import requests
from django.utils.dateparse import parse_date
from django.shortcuts import redirect
from nasa_api.models import NasaComment


# Create your views here.
def nasa_comment_create(request):
    # If it's a get we need to render a form
    if(request.method == "GET"):
        api_key = "oMrH77hL0IcYFpEAYw6HpzxULiro2VX2jGy9CIMV"

        # We are doing a get request
        date = request.GET.get("date")
        r = requests.get(f'https://api.nasa.gov/planetary/apod?date={date}&api_key={api_key}')
        url = r.json()["url"]
        return render(request, 'create_comment.html', {"nasa_url": url, "date": date})
    # If it's a post we need to create and direct to detail view
    elif(request.method == "POST"):
        # Create our object
        print("This is the comment value", request.POST.get("comment"))
        nasa_comment = NasaComment.objects.create(
            comment =  request.POST.get("comment"),
            date =  parse_date(request.POST.get("date")),
            rating =  request.POST.get("rating")
        )
        # Redirect to detail view to view said object
        return redirect('/nasa/comment/' + str(nasa_comment.id))
    else:
        return HttpResponse("What are you doing?")

def nasa_comment(request, nasa_id):
    nasa_comment = NasaComment.objects.get(id = nasa_id)
    return  render(request, 'nasa_comment.html', {"nasa_comment": nasa_comment})

def nasa_comment_list(request):
    nasa_comments = NasaComment.objects.all()
    return  render(request, 'list_nasa_comments.html', {"nasa_comments": nasa_comments})

def date_picker(request):
    if(request.method == "POST"):
        date = request.POST.get("date")
        return redirect('/nasa/comment/create/?date=' + date)
    elif(request.method == "GET"):
        return render(request, 'date_picker.html', {})
    else:
        return HttpResponse("Not sure how you got here, but leave")
