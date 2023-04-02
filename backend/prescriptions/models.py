from django.db import models

# Create your models here.

class Prescription(models.Model):
    drug_name = models.CharField(max_length=255)
    drug_dose = models.CharField(max_length=255)
    drug_instr = models.CharField(max_length=255, null=True)

