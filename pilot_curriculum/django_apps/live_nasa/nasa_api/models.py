from django.db import models

# Create your models here.
class NasaComment(models.Model):
    rating = models.IntegerField()
    comment = models.TextField()
    date = models.DateField()
