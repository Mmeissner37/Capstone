from django.urls import path, include
from petprofiles import views 

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.get_all_profiles),
    path('<int:pk>/', views.pet_details),
    path('newpet/', views.create_pet),
    path('alterpet/<int:pk>/', views.alter_pet),
    path('images/<int:pk>/', views.get_images),
    path('vet/', views.vet_profiles),
] 

