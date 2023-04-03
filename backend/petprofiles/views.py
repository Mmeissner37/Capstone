from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import PetProfile
from .serializers import PetProfileSerializer
from .models import Prescription

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_profiles(request):
    profiles = PetProfile.objects.all()
    serializer = PetProfileSerializer(profiles, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([AllowAny])
def pet_details(request, pk):
    one_profile = get_object_or_404(PetProfile, pk=pk)
    if request.method == 'GET':
        serializer = PetProfileSerializer(one_profile)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def pet_drugs(request):
    all_drugs = PetProfile.objects.filter(pet_drugs=request.prescriptions)
    serializer = PetProfileSerializer(all_drugs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)



