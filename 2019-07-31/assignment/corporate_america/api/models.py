from django.db import models


class Corperation(models.Model):
    wikidata_id = models.CharField(max_length=255, blank=False)
    title = models.CharField(blank=False, max_length=255)
    description = models.CharField(max_length=1023)
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True)
    created = models.DateField()
    owners = models.ManyToManyField('Owner')


class Owner(models.Model):
    wikidata_id = models.CharField(blank=False, max_length = 255)
    name = models.CharField(blank=False, max_length=1023)
    kind = models.CharField(max_length=1023) # person or corperation

