# Generated by Django 4.1.7 on 2023-04-05 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prescriptions', '0003_alter_prescription_drug_dose'),
        ('petprofiles', '0002_alter_petprofile_prescriptions'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='petprofile',
            name='prescriptions',
        ),
        migrations.AddField(
            model_name='petprofile',
            name='prescriptions',
            field=models.ManyToManyField(to='prescriptions.prescription'),
        ),
    ]
