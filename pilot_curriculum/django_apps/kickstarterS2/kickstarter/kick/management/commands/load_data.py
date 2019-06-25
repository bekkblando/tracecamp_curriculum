import csv
from django.core.management.base import BaseCommand
from kick.models import KickStarter 

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
                    kickstart = KickStarter.objects.create( backers_count = row[0], blurb = row[1] )
                    print(kickstart)
                line_count += 1