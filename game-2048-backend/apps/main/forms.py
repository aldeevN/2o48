from django import forms

from .models import CustomUser


class CustomUserAdminForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = (
            "username",
            "first_name",
            "last_name",
            "email",
            "last_login",
            "is_active",
            "is_superuser",
            "is_staff",
            "password"
        )
