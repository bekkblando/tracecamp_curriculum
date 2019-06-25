import datetime
import os

start_date = datetime.date(2019, 7, 29)
end_date = datetime.date(2019, 8, 18)
d = start_date
delta = datetime.timedelta(days=1)
while d <= end_date:
    if(d.weekday() != 6):
        print(d.strftime("%Y-%m-%d"))
        # os.mkdir(d.strftime("%Y-%m-%d"))
        open(f'{d.strftime("%Y-%m-%d")}/ReadMe.md', 'w')
    d += delta