from rest_framework import serializers
from .models import Pet_Prescription


class Pet_PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet_Prescription
        fields = ['id', 'pet_id', 'pet', 'prescription_id', 'prescription']
        depth = 1

    prescription_id = serializers.IntegerField(write_only=True)
    pet_id = serializers.IntegerField(write_only=True)
