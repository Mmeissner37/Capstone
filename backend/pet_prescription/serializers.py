from rest_framework import serializers
from .models import Pet_Prescription


class Pet_PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet_Prescription
        fields = ['id', 'pet', 'prescription', 'pet_id', 'prescription_id']
        depth = 1

    prescriptions_id = serializers.IntegerField(write_only=True)
    pet_id = serializers.IntegerField(write_only=True)
