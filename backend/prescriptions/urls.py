from django.urls import path, include
from prescriptions import views 


urlpatterns = [
    path('', views.get_all_prescriptions),
    path('filter/', views.pet_drug),
    path('<int:pk>/', views.drug_alter),
]

