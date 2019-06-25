from rest_framework import serializers
from kick_api.models import KickStarter

class KickStarterSerializer(serializers.ModelSerializer):
    class Meta:
        model = KickStarter
        fields = ('id', 'backers_count', 'blurb')
