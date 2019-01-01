from django.db import models

# Create your models here.
class KickStarter(models.Model):
    backers_count = models.IntegerField()
    blurb = models.TextField()

    def __str__(self):
        return f'ID: {self.id} | Blurb: {self.blurb} | Backers Count: {self.backers_count}'
