from django.db import models
# from petprofiles.models import PetProfile

# Create your models here.

class Prescription(models.Model):
    drug_name = models.CharField(max_length=255)
    drug_dose = models.CharField(max_length=255)
    drug_instr = models.CharField(max_length=255, null=True)
    # pet_profile = models.ManyToManyField(PetProfile, through='Pet_Prescription')

