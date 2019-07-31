from django.db import models

# Create your models here.

class Kickstarter_Campaign(models.Model):
    backers = models.IntegerField()
    blurb = models.CharField(max_length=135)
    pledged = models.FloatField()
    created = models.DateTimeField(auto_now=True)

