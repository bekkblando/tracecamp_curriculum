from django.shortcuts import render
from kick_api.models import KickstarterCampaign
from django.http import HttpResponse
from django.core import serializers

# Create your views here.

def get_kickstarter(request, kick_id):
    kickstart = KickstarterCampaign.objects.filter(id = kick_id)
    response_value = serializers.serialize("json", kickstart)
    return HttpResponse(response_value)
    