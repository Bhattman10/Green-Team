from pipes import Template
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers

from club_api.views import ClubViewSet

route = routers.DefaultRouter()
route.register(r"clubs", ClubViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/auth/", include('djoser.urls')),
    path("api/v1/auth/", include('djoser.urls.jwt')),
    path("api/v1/", include(route.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)