# Generated by Django 4.1.7 on 2023-04-05 15:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('petprofiles', '0003_remove_petprofile_prescriptions_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='petprofile',
            name='prescriptions',
        ),
    ]
