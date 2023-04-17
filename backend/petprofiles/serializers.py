from rest_framework import serializers
from .models import PetProfile


class PetProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetProfile
        fields = ['id', 'user', 'pet_name', 'species', 'breed', 'date_of_birth', 'image']
        depth = 1


    # prescriptions_id = serializers.IntegerField(write_only=True)