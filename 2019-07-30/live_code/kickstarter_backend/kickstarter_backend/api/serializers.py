from rest_framework import serializers
from api.models import KickstarterCampaign


class KickstarterCampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = KickstarterCampaign
        fields = [  
                'blurb',
                'category',
                'pledged',
                'creator',
                'deadline',
                'goal',
                'location',
                'name',
                'state', 
                'urls',
                'backers_count',
                'id'
        ]
        read_only_fields = ['id']