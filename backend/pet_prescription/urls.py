from django.urls import path, include
from pet_prescription import views 


urlpatterns = [
    path('all/', views.get_all),
]

