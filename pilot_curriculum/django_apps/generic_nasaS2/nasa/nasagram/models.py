from django.db import models
from django.urls import reverse_lazy

# Create your models here.
class NasaComment(models.Model):
    rating = models.IntegerField()
    comments = models.TextField()
    favorite = models.BooleanField()
    url = models.URLField()
    date = models.DateField()

    def __str__(self):
        return f'{self.comments} , {self.url} , {self.date} , {self.rating}, {self.favorite}'

    def get_absolute_url(self):
        return reverse_lazy("nasa_comment_detail", args = [str(self.id)])
