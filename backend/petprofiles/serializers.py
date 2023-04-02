from rest_framework import serializers
from .models import PetProfile


class PetProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetProfile
        fields = ['id', 'user_id', 'pet_name', 'species', 'breed', 'date_of_birth', 'prescriptions']
        depth = 1


