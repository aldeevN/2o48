import random
from uuid import UUID, uuid4
from rest_framework.serializers import ValidationError

from django.contrib.auth.hashers import make_password
from apps.game_app.models import GamePlayed
from apps.main.email_gateway import EmailGateway
from apps.main.models import CustomUser
from django.core.cache import cache


class RegistrationCreate:
    def create_user(self, data):
        users = CustomUser.objects.filter(email=data["email"]).first()
        if users is None:
            if data["password_1"] != data["password_2"]:
                raise ValidationError(detail="Пароли должны совпадать")
            password = data["password_1"]
            user = CustomUser.objects.create(
                first_name=data["first_name"],
                last_name=data["last_name"],
                username=data["username"],
                email=data["email"],
                password=make_password(password),
            )
            user_score = GamePlayed.objects.create(user=user)


class SendResetPasswordEmail:

    def send_reset_pass(self, data):
        user = CustomUser.objects.filter(email=data["email"]).first()
        if user is None:
            raise ValidationError(
                {"detail": "Пользователя с таким Email не существует."}
            )

        code = "".join([str(random.randint(0, 9)) for _ in range(6)])
        cache.set(user.email, value=code, timeout=300)

        EmailGateway().send_email(
            purpose="reset_password",
            user=user,
            code=code,
        )


class PasswordResetService:

    def check_reset_pass_code(self, email: str, code: str) -> UUID:
        status = cache.get(email) == code
        if status:
            key = uuid4()
            cache.set(f"{key}-passed", value=email, timeout=300)
            return key
        raise ValidationError({"detail": "Неверный код"})

    def reset_password(self, key: UUID, password: str):
        email = cache.get(f"{key}-passed")
        if not email:
            raise ValidationError(
                {"detail": "Проверка не пройдена, заново запросите код."}
            )

        user = CustomUser.objects.filter(email=email)
        cache.delete(f"{key}-passed")
        user.update(password=make_password(password))
