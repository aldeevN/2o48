
from rest_framework.serializers import ValidationError

from backend import settings

def is_only_letters_validator(name: str | None):
    if isinstance(name, str):
        if not name.isalpha():
            raise ValidationError("Некорректный формат")
        
