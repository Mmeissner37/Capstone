from rest_framework import serializers;
from .models import Appointments; 



class AppointmentsSerializer(serializers.ModelSerializer):
    class Meta: 
        model: Appointments
        fields = ['id', 'user', 'title', 'appt_date', 'start', 'end']
        depth = 1 
