# Generated by Django 4.1.7 on 2023-04-05 15:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('prescriptions', '0003_alter_prescription_drug_dose'),
        ('petprofiles', '0004_remove_petprofile_prescriptions'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pet_Prescription',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='petprofiles.petprofile')),
                ('prescription', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='prescriptions.prescription')),
            ],
        ),
    ]
