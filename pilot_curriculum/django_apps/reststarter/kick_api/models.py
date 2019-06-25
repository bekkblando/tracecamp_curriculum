from django.db import models

# Create your models here.
class KickStarter(models.Model):
    backers_count = models.IntegerField()
    blurb = models.TextField()

    class Meta:
        ordering = ['backers_count']