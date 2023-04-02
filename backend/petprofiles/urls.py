from django.urls import path, include
from petprofiles import views 


urlpatterns = {
    path('', views.get_all_profiles),
}

