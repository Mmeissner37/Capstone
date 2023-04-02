from django.db import models
from authentication.models import User
from prescriptions import Prescription

# Create your models here.
class PetProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pet_name = models.CharField(max_length=255)
    species = models.CharField(max_length=255)
    breed = models.CharField(max_length=255)
    date_of_birth = models.DateField(max_length=255)
    prescriptions = models.ForeignKey(Prescription, on_delete=models.CASCADE)



