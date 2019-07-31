from rest_framework import serializers
from api.models import Kickstarter_Campaign

class KickstarterCampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kickstarter_Campaign
        fields = ['id', 'backers', 'blurb', 'pledged', 'created']