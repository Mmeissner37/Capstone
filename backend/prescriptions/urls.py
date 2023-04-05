from django.urls import path, include
from prescriptions import views 


urlpatterns = [
    path('', views.get_all_drugs),
    path('make/', views.pet_drug),
    path('<int:pk>/', views.alter_drug),
]

