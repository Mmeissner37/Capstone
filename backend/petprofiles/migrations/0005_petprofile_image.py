# Generated by Django 4.1.7 on 2023-04-16 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petprofiles', '0004_remove_petprofile_prescriptions'),
    ]

    operations = [
        migrations.AddField(
            model_name='petprofile',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
