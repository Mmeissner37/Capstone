from django.urls import path, include 
from appointments import views 


urlpatterns = [
    path('all/', views.get_appts),
    path('', views.user_appts)
]

