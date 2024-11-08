from djoser.signals import user_activated
from django.dispatch import receiver
from .models import UserProfile

# creates user profile on account activation
@receiver(user_activated)
def create_user_profile(user, request, **kwargs):
    profile = UserProfile.objects.create(user=user)
    profile.save()