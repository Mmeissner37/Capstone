from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Prescription
from .serializers import PrescriptionSerializer


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_drugs(request):
    drugs = Prescription.objects.all()
    serializer = PrescriptionSerializer(drugs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def pet_drug(request):
    if request.method == 'POST':
        serializer = PrescriptionSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def alter_drug (request, pk):
    drug = get_object_or_404(Prescription, pk=pk)
    if request.method == 'PUT':
        serializer = PrescriptionSerializer(drug, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        drug.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
