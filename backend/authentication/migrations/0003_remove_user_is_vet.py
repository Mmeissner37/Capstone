# Generated by Django 4.1.7 on 2023-04-15 16:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_user_is_owner_user_is_vet'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_vet',
        ),
    ]
