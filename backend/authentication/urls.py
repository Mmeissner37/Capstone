from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, MyTokenObtainPairView

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('login/owner/', MyTokenObtainPairView.as_view(), name='token_obtain_pair_owner'),
    # path('login/vet/', MyTokenObtainPairView.as_view(), name='token_obtain_pair_vet'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
]


