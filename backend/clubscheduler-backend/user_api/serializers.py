from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer

UserModel = get_user_model()

class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = UserModel
        fields = ['id', 'email', 'first_name', 'last_name', 'password']