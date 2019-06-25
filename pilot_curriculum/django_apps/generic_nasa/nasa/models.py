from django.db import models

# Create your models here.
class NasaComments(models.Model):
    date = models.DateField()
    comment = models.TextField()
    rating = models.IntegerField()
    image_url = models.URLField()

    def __str__(self):
        return  f'{self.comment}  {self.date}  {self.rating}'