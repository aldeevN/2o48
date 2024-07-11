from django.db.models import TextChoices


class UserType(TextChoices):
    BASE_COMPANY = ("base_company", "Базовая компания")
    HEAD = ("head", "Руководитель филиала")
    SUBSTITUTE_HEAD = ("substitute_head", "Управляющий филиалом")
    MANAGER = ("manager", "Менеджер")
    TUTOR = ("teacher", "Тьютор")
    ASSISTANT = ("student", "Ассистент")
    ADMIN = ("admin", "Администратор")
    
