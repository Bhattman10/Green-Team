from django.shortcuts import render
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Club
from .serializers import ClubSerializer

from rest_framework import viewsets

class ClubViewSet(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication]
    queryset = Club.objects.all()
    serializer_class = ClubSerializer



