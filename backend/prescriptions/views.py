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
    drugs = Prescription.objects.all()
    serializer = PrescritptionSerializer(drugs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def pet_drugs(request):
    print(
        'User', f"{request.user.id} {request.user.email} {request.user.username}")
    all_drugs = Prescription.objects.filter(data=request.prescriptions)
    serializer = PrescritptionSerializer(all_drugs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

