# Generated by Django 2.2.3 on 2019-07-23 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='KickstarterCampaign',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('backers_count', models.IntegerField()),
                ('blurb', models.CharField(max_length=135)),
                ('category', models.TextField()),
                ('pledged', models.FloatField()),
                ('created', models.DateTimeField()),
                ('creator', models.TextField()),
                ('deadline', models.DateTimeField()),
                ('goal', models.FloatField()),
                ('kickstarter_site_id', models.IntegerField()),
                ('location', models.TextField()),
                ('name', models.CharField(max_length=60)),
                ('state', models.CharField(max_length=20)),
                ('urls', models.TextField()),
            ],
        ),
    ]