from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _

from .forms import CustomUserAdminForm
from .models import CustomUser

UserModel = get_user_model()


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ["pk","username", "email", "last_login"]
    list_display_links = ["pk", "email"]
    list_filter = (
        "email",
        "id",
    )
    search_fields = ["email"]
    ordering = ["pk"]
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2"),
            },
        ),
    )
    fieldsets = (
        (
            None,
            {"fields": ("email", "customer_id", "username", "first_name", "last_name", "profile_pic")}, #Убрал отсюда пассворд
        ),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    form = CustomUserAdminForm
