# Source: https://testdriven.io/blog/django-custom-user-model/

from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
   
    def create_user(self, email, password, first_name, last_name, **other_fields):
        
        if not email:
            raise ValueError(_("User must have an email"))
        if not first_name:
            raise ValueError(_("User must include first name"))
        if not last_name:
            raise ValueError(_("User must include last name"))
        
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name,
                          last_name=last_name, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, first_name, last_name, **other_fields):
    
        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)
        other_fields.setdefault("is_active", True)

        if other_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if other_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        
        return self.create_user(email, password, first_name, last_name, **other_fields)
