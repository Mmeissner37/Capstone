from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from.models import Pet_Prescription
from .serializers import Pet_PrescriptionSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_all(request):
    if request.method == 'GET':
        profile_drugs = Pet_Prescription.objects.all()
        serializer = Pet_PrescriptionSerializer(profile_drugs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = Pet_PrescriptionSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

