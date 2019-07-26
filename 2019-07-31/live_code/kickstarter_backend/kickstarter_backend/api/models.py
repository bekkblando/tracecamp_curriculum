from django.db import models

# Create your models here.
class KickstarterCampaign(models.Model):
    backers_count = models.IntegerField()
    blurb = models.CharField(max_length = 135)
    category = models.TextField()
    pledged = models.FloatField()
    created = models.DateTimeField(auto_now_add=True)
    creator = models.TextField()
    deadline = models.DateTimeField()
    goal = models.FloatField()
    kickstarter_site_id = models.IntegerField(default = -1)
    location = models.TextField()
    name = models.CharField(max_length = 60)
    state = models.CharField(max_length = 20)
    urls = models.TextField()
    