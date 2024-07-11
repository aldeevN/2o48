PURPOSE_MAPPING = {
    "reset_password": {
        "subject": "Получение кода для сброса пароля",
        "template": "main/reg.html",
        "context": {"code": str},
    },
}