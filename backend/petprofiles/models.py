from django.db import models
from authentication.models import User
# from prescriptions.models import Prescription

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

# Create your models here.
class PetProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pet_name = models.CharField(max_length=255)
    species = models.CharField(max_length=255)
    breed = models.CharField(max_length=255)
    date_of_birth = models.DateField(max_length=255)
    image_url= models.ImageField(upload_to=upload_to, blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.pet_name}"
    
    # prescriptions = models.ManyToManyField(Prescription, through='Pet_Prescription')



