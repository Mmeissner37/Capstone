from django.urls import path, include
from petprofiles import views 


urlpatterns = {
    path('/pets', views.get_all_profiles),
    path('<ink:pk>/', views.pets_detail),
}

