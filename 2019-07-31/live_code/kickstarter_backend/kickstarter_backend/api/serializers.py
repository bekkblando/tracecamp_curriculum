from rest_framework import serializers
from api.models import KickstarterCampaign


class KickstarterCampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = KickstarterCampaign
        fields = '__all__'