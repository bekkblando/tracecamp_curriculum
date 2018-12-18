from django.db import models

# Create your models here.
class Log(models.Model):
    date = models.DateField()
    entry_text = models.TextField()
    rateing = models.IntegerField()