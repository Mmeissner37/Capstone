from django.db import models

# Create your models here.

class Prescription(models.Model):
    drug_name = models.CharField(max_length=255)
