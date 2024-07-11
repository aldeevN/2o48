from django.db import models
from django.contrib.auth import get_user_model
from apps.main.models import CustomUser

User = CustomUser


class Feedback(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, verbose_name="Имя пользователя"
    )
    feedback = models.TextField(verbose_name="Отзыв")

    def __str__(self) -> str:
        return self.user.email

    class Meta:
        verbose_name = "Отзыв"
        verbose_name_plural = "Отзывы"


class GamePlayed(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, verbose_name="Имя пользователя"
    )
    score = models.PositiveBigIntegerField(default=0, verbose_name="Счёт")

    def __str__(self) -> str:
        return self.user.username

    class Meta:
        verbose_name = "Cыгранная игры"
        verbose_name_plural = "Сыгранные игры"
