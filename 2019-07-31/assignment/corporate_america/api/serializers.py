from api.models import * 
from rest_framework import serializers


class CorperationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Corperation
        fields = "__all__"


class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = "__all__"

