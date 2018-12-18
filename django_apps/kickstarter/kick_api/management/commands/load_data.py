import csv
from django.core.management import BaseCommand
from datetime import datetime
from django.utils import timezone
from kick_api.models import KickstarterCampaign

class Command(BaseCommand):
    help = 'Load a data from csv file into the database'

    def add_arguments(self, parser):
        parser.add_argument('--path', type=str)

    def handle(self, *args, **kwargs):
        path = kwargs['path']
        KickstarterCampaign.objects.all().delete()
        with open(path, 'rt', encoding='utf-8') as f:
            reader = csv.reader(f, dialect='excel')
            for row in reader:
                campaign = KickstarterCampaign.objects.create(
                    backers_count=row[0],
                    blurb=row[1],
                    category=row[2],
                    converted_pledged_amount=row[3],
                    country=row[4],
                    created_at=datetime.fromtimestamp(int(row[5]), tz=timezone.utc),
                    creator=row[6],
                    currency=row[7],
                    currency_symbol=row[8],
                    currency_trailing_code=row[9],
                    current_currency=row[10],
                    deadline=datetime.fromtimestamp(int(row[11]), tz=timezone.utc),
                    disable_communication=row[12].capitalize(),
                    friends=row[13],
                    fx_rate=row[14],
                    goal=row[15],
                    kickstarter_id=row[16],
                    is_backing=row[17],
                    is_starrable=row[18].capitalize(),
                    is_starred=row[19],
                    launched_at=datetime.fromtimestamp(int(row[20]), tz=timezone.utc),
                    location=row[21],
                    name=row[22],
                    permissions=row[23],
                    photo=row[24],
                    pledged=row[25],
                    profile=row[26],
                    slug=row[27],
                    source_url=row[28],
                    spotlight=row[29].capitalize(),
                    staff_pick=row[30].capitalize(),
                    state=row[31],
                    state_changed_at=datetime.fromtimestamp(int(row[32]), tz=timezone.utc),
                    static_usd_rate=row[33],
                    urls=row[35],
                    usd_pledged=row[35],
                    usd_type=row[36],
                )