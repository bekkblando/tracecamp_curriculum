import csv
from django.core.management import BaseCommand
from datetime import datetime
from django.utils import timezone
from api.models import Corperation, Owner


class Command(BaseCommand):
    help = 'Load a data from csv file into the database'

    def add_arguments(self, parser):
        parser.add_argument('--name', type=str, help='Add tree from name of corperation')
        parser.add_argument('--delete-old', type=int, help='Deletes data in database and adds new')

    def handle(self, *args, **kwargs):
        if kwargs['delete-old']:
            Corperation.objects.all().delete()
            Owner.objects.all().delete()
        name = kwargs['name']
        
