from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from api.models import KickstarterCampaign
from api.serializers import KickstarterCampaignSerializer


def hello_world_response(request):
    return HttpResponse("Hello, world")

def kickstarter_list(request):
    if request.method == 'GET':
        snippets = KickstarterCampaign.objects.all()
        serializer = KickstarterCampaignSerializer(snippets, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = KickstarterCampaignSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

def kickstarter_detail(request, pk):
    try:
        snippet = KickstarterCampaign.objects.get(pk=pk)
    except KickstarterCampaign.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = KickstarterCampaignSerializer(snippet)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = KickstarterCampaignSerializer(snippet, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        snippet.delete()
        return HttpResponse(status=204)