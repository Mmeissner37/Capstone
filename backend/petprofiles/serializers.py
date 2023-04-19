from rest_framework import serializers
from .models import PetProfile
from .models import Image


class PetProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetProfile
        fields = ['id', 'user', 'pet_name', 'species', 'breed', 'date_of_birth']
        depth = 1


class ImageSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(required=False)

    class Meta: 
        model = Image
        fields = ['id', 'image_url']



    # prescriptions_id = serializers.IntegerField(write_only=True)