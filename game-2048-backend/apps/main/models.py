# -*- coding: utf-8 -*-
from datetime import date
import uuid
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

from apps.main.utils import path_and_rename

from .managers import CustomUserManager


class CustomUser(AbstractUser):
    """Custom User model."""
    profile_pic = models.ImageField(upload_to=path_and_rename('game_2048/profile_picture/'), null=True, verbose_name="Фото пользователя") #
    first_name = models.CharField(max_length=150, blank=True, verbose_name="Имя")
    last_name = models.CharField(max_length=150, blank=True, verbose_name="Фамилия")
    email = models.EmailField(verbose_name="E-mail", unique=True)
    customer_id = models.UUIDField(
        default=uuid.uuid4, unique=True, verbose_name="ЛичныйID"
    )
    last_login = models.DateTimeField(
        verbose_name="Дата последнего входа", default=timezone.now
    )
    date_of_birth = models.DateField(default=date.today)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects: CustomUserManager = CustomUserManager()

    def __str__(self):
        return self.username
