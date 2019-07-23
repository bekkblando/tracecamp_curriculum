from django.db import models

# Create your models here.
class KickstarterCampaign(models.Model):
    backers_count = models.IntegerField()
    blurb = models.CharField(max_length = 135)
    category = models.TextField()
    pledged = models.FloatField()
    created = models.DateTimeField()
    creator = models.TextField()
    deadline = models.DateTimeField()
    goal = models.FloatField()
    kickstarter_site_id = models.IntegerField()
    location = models.TextField()
    name = models.CharField(max_length = 60)
    state = models.CharField(max_length = 20)
    urls = models.TextField()
    