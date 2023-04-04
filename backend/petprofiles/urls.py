from django.urls import path, include
from petprofiles import views 


urlpatterns = [
    path('', views.get_all_profiles),
    path('<int:pk>/', views.pet_details),
    path('newpet/', views.create_pet),
    path('alterpet/<int:pk>/', views.alter_pet),
]

