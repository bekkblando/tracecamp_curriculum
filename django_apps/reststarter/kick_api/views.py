from django.shortcuts import render
from rest_framework import viewsets
from kick_api.models import KickStarter
from kick_api.serializers import KickStarterSerializer

# Create your views here.
class KickStarterViewSet(viewsets.ModelViewSet):
    queryset = KickStarter.objects.all()
    serializer_class = KickStarterSerializer
