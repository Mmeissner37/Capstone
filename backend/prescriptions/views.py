from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Prescription
from .serializers import PrescritptionSerializer


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_prescriptions(request):
    if request.method == 'GET':
        drugs = Prescription.objects.all()
        serializer = PrescritptionSerializer(drugs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def pet_drug(request):
    drug = get_object_or_404(Prescription)
    if request.method == 'GET':
        drug = Prescription.objects.all()
        serializer = PrescritptionSerializer(drug, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = PrescritptionSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def alter_drug (request, pk):
    drug = get_object_or_404(Prescription, pk=pk)
    if request.method == 'PUT':
        serializer = PrescritptionSerializer(drug, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        drug.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
