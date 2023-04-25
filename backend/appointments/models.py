from django.db import models
from authentication.models import User 

# Create your models here.

class Appointments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    appt_date = models.DateField(max_length=255)
    start = models.TimeField()
    end = models.TimeField()

