from django.shortcuts import render
from kick.models import KickStarter
from django.http import HttpResponse
from django.core import serializers

# Create your views here.
def kick_detail_view(request, kick_id):
    kickstarter = KickStarter.objects.filter(id = kick_id)
    data = serializers.serialize("json", kickstarter)
    response = HttpResponse(data)
    return response