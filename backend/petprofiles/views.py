from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import PetProfile
from .serializers import PetProfileSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_profiles(request):
    profiles = PetProfile.objects.all()
    serializer = PetProfileSerializer(profiles, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def pet_details(request, pk):
    one_profile = get_object_or_404(PetProfile, pk=pk)
    if request.method == 'GET':
        serializer = PetProfileSerializer(one_profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_pet(request):
    if request.method == "POST":
        serializer = PetProfileSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def alter_pet(request, pk):
    alterpet = get_object_or_404(PetProfile, pk=pk)
    if request.method == 'PUT':
        serializer = PetProfileSerializer(alterpet, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        alterpet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

