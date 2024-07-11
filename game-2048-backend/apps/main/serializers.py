from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password
from django.forms import ValidationError
from rest_framework import serializers

from apps.game_app.models import GamePlayed
from apps.main.models import CustomUser


class FeedbackSerializer(serializers.Serializer):
    feedback = serializers.CharField()


class LeaderBoardSerializer(serializers.Serializer):
    score = serializers.IntegerField()


class RegistrationSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    username = serializers.CharField(max_length=20)
    email = serializers.EmailField(max_length=50)
    password_1 = serializers.CharField()
    password_2 = serializers.CharField()


class SendResetPasswordCodeSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=50)


class CheckRestPasswordCodeSerializer(SendResetPasswordCodeSerializer):
    code = serializers.CharField()


class ProfileModelSerializer(serializers.ModelSerializer):
    max_score = serializers.SerializerMethodField()
    rating = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = (
            "first_name",
            "last_name",
            "username",
            "profile_pic",
            "password",
            "email",
            "rating",
            "max_score",
        )
        extra_kwargs = {
            "password": {"write_only": True},
            "username": {"read_only": True},
            "email": {"read_only": True},
            "max_score": {"read_only": True},
            "rating": {"read_only": True},
        }

    def to_representation(self, instance: CustomUser):
        response = super(ProfileModelSerializer, self).to_representation(instance)
        if instance.profile_pic:
            response["profile_pic"] = instance.profile_pic.url
        return response

    def get_max_score(self, obj: CustomUser) -> int:
        game = GamePlayed.objects.filter(user=obj).first()
        return game.score if game is not None else 0

    def get_rating(self, obj: CustomUser) -> int:
        game = GamePlayed.objects.filter(
            score__gte=GamePlayed.objects.filter(user=obj).first().score
        ).count()
        return game

    def validate_password(self, value):
        try:
            validate_password(value)
        except ValidationError as exc:
            raise serializers.ValidationError(exc.messages)
        return value

    def update(self, instance: CustomUser, validated_data: dict):
        if "password" in validated_data:
            validated_data["password"] = make_password(validated_data["password"])
        user = super().update(instance, validated_data)
        return user


class ResetPasswordSerializer(serializers.Serializer):
    key = serializers.UUIDField()
    password_1 = serializers.CharField()
    password_2 = serializers.CharField()

    def validate(self, attrs):
        attrs = super().validate(attrs)
        if attrs["password_1"] != attrs["password_2"]:
            raise serializers.ValidationError(f"Пароли должны совпадать.")
        return super().validate(attrs)

    def validate_password_1(self, value):
        try:
            validate_password(value)
        except ValidationError as exc:
            raise serializers.ValidationError(str(exc))
        return value
