# Generated by Django 4.1.7 on 2023-04-17 21:17

from django.db import migrations, models
import petprofiles.models


class Migration(migrations.Migration):

    dependencies = [
        ('petprofiles', '0005_petprofile_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='petprofile',
            name='image',
        ),
        migrations.AddField(
            model_name='petprofile',
            name='image_url',
            field=models.ImageField(blank=True, null=True, upload_to=petprofiles.models.upload_to),
        ),
    ]
