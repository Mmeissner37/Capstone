from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Appointments
from .serializers import AppointmentsSerializer


# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_appts(request):
    appts = Appointments.objects.all()
    serializer = AppointmentsSerializer(appts, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_appts(request):
    if request.method == 'GET':
        appts = Appointments.objects.filter(user_id=request.user_id)
        serializer = AppointmentsSerializer(appts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AppointmentsSerializer(data=request.data)
        if serializer.is_valid:
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)