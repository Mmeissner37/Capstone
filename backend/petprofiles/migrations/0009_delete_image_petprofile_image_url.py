# Generated by Django 4.1.7 on 2023-04-20 00:38

from django.db import migrations, models
import petprofiles.models


class Migration(migrations.Migration):

    dependencies = [
        ('petprofiles', '0008_rename_mymodel_image'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Image',
        ),
        migrations.AddField(
            model_name='petprofile',
            name='image_url',
            field=models.ImageField(blank=True, null=True, upload_to=petprofiles.models.upload_to),
        ),
    ]
