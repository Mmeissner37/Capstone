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
    return Response('ok')


