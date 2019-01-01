from django.http import HttpResponse
from kick.models import KickStarter
from django.core import serializers

# Create your views here.
def kick_start_view(request, kick_id):
    kick = KickStarter.objects.filter(id = kick_id)  
    data = serializers.serialize("json", kick)
    return HttpResponse(data)
    
