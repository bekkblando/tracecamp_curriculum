from django.db import models

# Create your models here.
class KickStarter(models.Model):
    backers_count = models.IntegerField()
    blurb = models.TextField()
    category = models.TextField()
    # converted_pledged_amount = models.FloatField() #  'country', 'created_at', 'creator', 'currency', 'deadline', 'disable_communication', 'fx_rate', 'goal', 'id', 'launched_at', 'location', 'name', 'photo', 'pledged', 'profile', 'slug', 'source_url', 'spotlight', 'staff_pick', 'state', 'state_changed_at', 'static_usd_rate', 'urls', 'usd_pledged', 'usd_type'
