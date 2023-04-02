from django.urls import path, include
from prescriptions import views 


urlpatterns = {
    path('alldrugs/', views.get_all_prescriptions),
}

