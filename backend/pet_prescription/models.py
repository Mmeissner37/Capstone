from django.db import models
from petprofiles.models import PetProfile 
from prescriptions.models import Prescription 


# Create your models here.

class Pet_Prescription(models.Model):
    pet = models.ForeignKey(PetProfile, on_delete=models.CASCADE)
    prescription = models.ForeignKey(Prescription, on_delete=models.CASCADE)
    