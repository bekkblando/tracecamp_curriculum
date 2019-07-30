from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from api.models import Kickstarter_Campaign
from django.views.decorators.csrf import csrf_exempt
from api.serializers import  KickstarterCampaignSerializer
from rest_framework.parsers import JSONParser
# Create your views here.

def hello_world_response(request):
    return HttpResponse("Hello World from Trace Camp!")

@csrf_exempt
def kickstarter_list(request):
    if request.method == 'GET':
        data = Kickstarter_Campaign.objects.all()
        serializer = KickstarterCampaignSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        #print(request.raw_post_data)
        if request.body.decode('utf-8') == "":
            return HttpResponse('You need to pass in data in the POST body to add data to the server', status=400 )
        data = JSONParser().parse(request)
        serializer = KickstarterCampaignSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
        
@csrf_exempt
def kickstarter_campaign_detail(request, id):
    try: 
        campaign = Kickstarter_Campaign.objects.get(pk=id)
    except Kickstarter_Campaign.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = KickstarterCampaignSerializer(campaign)
        return JsonResponse(serializer.data)

    if request.method == 'PUT':
        if request.body.decode('utf-8') == "":
            return HttpResponse('You need to pass in data to PUT body to modify this entry', status=400 )
        data = JSONParser().parse(request)
        serializer = KickstarterCampaignSerializer(campaign, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    if request.method == 'DELETE':
        campaign.delete()
        return HttpResponse(status=204)

    return HttpResponse(status=400)

    