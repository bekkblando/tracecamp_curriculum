import csv
from django.core.management import BaseCommand
from datetime import datetime
from django.utils import timezone
from kick2.models import KickStarter
# from kick2.models import KickstarterCampaign

class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('--path', type=str)

    def handle(self, *args, **kwargs):
        path = kwargs['path']
        with open(path) as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            for row in csv_reader:
                if(line_count != 0):
                    KickStarter.objects.create(
                        backers_count = row[0], 
                        blurb = row[1], 
                        category = row[2]
                    )
                line_count =+ 1