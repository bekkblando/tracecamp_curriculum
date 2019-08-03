from django.db import models

# Create your models here.
class  Post(models.Model):
    title = models.TextField()
    body = models.TextField()