from django.core.management.base import BaseCommand, CommandError
from api.models import KickstarterCampaign
import datetime
import pytz
import csv

class Command(BaseCommand):
    help = 'Overwrites kickstarter data in database'

    def add_arguments(self, parser):
        parser.add_argument('path', type=str)

    def handle(self, *args, **options):
        self.stdout.write("loading data from: ", options['path'])
        KickstarterCampaign.objects.all().delete()
        with open(options['path']) as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            for row in csv_reader:
                if line_count != 0:
                    KickstarterCampaign.objects.create(
                        backers_count = row[0],
                        blurb = row[1],
                        category = row[2],
                        pledged = row[3],
                        created = datetime.datetime.fromtimestamp(int(row[5]),tz=pytz.utc),
                        creator = row[6],
                        deadline = datetime.datetime.fromtimestamp(int(row[8]), tz=pytz.utc),
                        goal = row[11],
                        kickstarter_site_id = row[12],
                        location = row[14],
                        name = row[15],
                        state = row[23],
                        urls = row[26]
                    )
                line_count += 1

