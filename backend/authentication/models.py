from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass 
    '''
    This is a custom version of the built in User class
    It contains all of the built in fields and functionality of the standard User
    You can add fields here for any additional properties you want a User to have
    This is useful for adding roles (Customer and Employee, for example)
    For just a few roles, adding boolean fields is advised
    '''
    # Example (note import of models above that is commented out)
    # this will add a column to the user table
    # is_student = models.BooleanField('student status', default=False)

    is_owner = models.BooleanField('owner status', default=False)
    is_vet = models.BooleanField('vet status', default=False)
    is_guest = models.BooleanField('guest status', default=False)

# class Owner(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True) 

    # class Owner(models.Model):
    #     user = models.ForeignKey(User)
    #     pets = models.ForeignKey(PetProfile)
