from rest_framework import viewsets
from api.serializers import CorperationSerializer, OwnerSerializer
from api.models import Corperation, Owner


class CorperationViewSet(viewsets.ModelViewSet):
    queryset = Corperation.objects.all()
    serializer_class = CorperationSerializer


class OwnerViewSet(viewsets.ModelViewSet):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer
