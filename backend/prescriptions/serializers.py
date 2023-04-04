from rest_framework import serializers
from .models import Prescription


class PrescritptionSerializer:
    class Meta:
        model = Prescription
        fields = ['drug_name', 'drug_dose', 'drug_instr']
        depth = 1


